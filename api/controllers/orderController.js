const Order = require ('../models/orderModel')
const Product = require("../models/productModel")
const mongoose = require('mongoose');

//accept order function missing
//test if these functions are working

//get order list of user
exports.GetOrderOfUser = async ( req, res, next ) => {
  
  const loggedInUserId = req.params.userId.toString();

  if (!loggedInUserId) {
    return res.status(400).json({ message: 'User ID is missing in the request parameters' });
  }
  try {
      const orderData = await Order.find({ userId: new mongoose.Types.ObjectId(loggedInUserId) });
      const productIds = orderData.map(c => c.productId.toString());

      // Find a product by its _id
      const obj_ids = productIds.map(function (id) { return new mongoose.Types.ObjectId(id); });
      const productsData = await Product.find({ _id: { $in: obj_ids } });

      //sulod ani ibutang ang orderData
      var userOrderProducts = [];
      orderData.forEach(c => {

          var product = productsData.filter(d => {
              return d._id.toString() === c.productId.toString();
          });

          userOrderProducts.push({
              "productId": product[0]._id,
              "productName": product[0].productName,
              "productDesc": product[0].description,
              "orderProductQuantity": c.orderProductQuantity,
              "productPrice": product[0].price,
              "productTotalPrice": product[0].price * c.orderProductQuantity,
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
  const { productId, userId, orderProductQuantity, orderDate, orderStatus } = req.body
  try {
      await Order.create({
          userId,
          productId,
          orderProductQuantity,
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
  const { userId } = req.body;

  await Order.deleteOne({userId: new mongoose.Types.ObjectId(userId) })
  .then(() => {
    res.status(201).json({ message: "Order is successfully deleted. Id: " + userId })

  })
  .catch(error =>
    res
      .status(400)
      .json({ message: "An error occurred", error: error.message })
  )
}

//update order if it is declined or accepted
exports.UpdateOrder = async ( req, res, next ) => {

}