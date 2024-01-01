const Order = require ('../models/orderModel')
const Product = require("../models/productModel")
const mongoose = require('mongoose');

//accept order function missing
//test if these functions are working

//get order list of user
exports.GetOrderOfUser = async ( req, res, next ) => {
  const loggedInUserId = req.params.userId;

  try {
      const orderData = await Order.find({ userId: new mongoose.Types.ObjectId(loggedInUserId) });
      const productIds = orderData.map(c => c.productId.toString());

      // Find a product by its _id
      const obj_ids = productIds.map(function (id) { return new mongoose.Types.ObjectId(id); });
      const productsData = await Product.find({ _id: { $in: obj_ids } });

      var userOrderProducts = [];
      userOrderProducts.forEach(c => {

          var product = productsData.filter(d => {
              return d._id.toString() === c.productId.toString();
          });

          userOrderProducts.push({
              "productId": product[0]._id,
              "productName": product[0].productName,
              "productDesc": product[0].description,
              "productQuantity": c.productQuantity,
              "productPrice": product[0].price,
              "productTotalPrice": product[0].price * c.productQuantity,
          });
      });

      // Respond with the found product
      res.status(200).json({ userOrderProducts });

  } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
  }
}

//add order from user
exports.AddOrder = async ( req, res, next ) => {
  const { productId, userId, orderDate, orderStatus } = req.body
  try {
      await Order.create({
          userId,
          productId,
          orderDate,
          orderStatus
      }).then(order =>
          res.status(200).json({
              message: "Added Successfully to order",
              order,
          })
      )
  } catch (err) {
      res.status(401).json({
          message: "Added Unsuccessfully to order",
          error: err.message,
      })
  }
}

//delete order for admin
exports.DeleteOrder = async ( req, res, next ) => {

}

//update order if it is declined or accepted
exports.UpdateOrder = async ( req, res, next ) => {

}