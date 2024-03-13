const Order = require ('../models/orderModel')
const Product = require("../models/productModel")
const User = require("../models/userModel")
const mongoose = require('mongoose');

//accept and decline order function is missing
//get order for admin

//get order list of all user for admin
exports.GetOrder = async (req, res, next) => {
  try {
    const ordersData = await Order.find({});
    const productIds = ordersData.map(c => c.productId.toString());
    const userIds = ordersData.map(x => x.userId.toString());

    const obj_productIds = productIds.map(id => new mongoose.Types.ObjectId(id));
    const productsData = await Product.find({ _id: { $in: obj_productIds } });

    const obj_userIds = userIds.map(id => new mongoose.Types.ObjectId(id));
    const usersData = await User.find({ _id: { $in: obj_userIds } });

    var userOrders = [];
    ordersData.forEach(c => {
      const product = productsData.find(d => d._id.toString() === c.productId.toString());
      const user = usersData.find(x => x._id.toString() === c.userId.toString());

      if (product && user) {
        userOrders.push({
          userOrderProductId: product._id,
          userOrderId: user._id,
          userOrderEmail: user.email,
          productOrderName: product.productName,
          orderProductQuantity: c.orderProductQuantity,
          productOrderPrice: product.price,
          OrderTotalPrice: product.price * c.orderProductQuantity,
          orderStatus: c.orderStatus
        });
      } else {
        // Handle case where product or user is not found
        console.error('Product or user not found for order:', c);
      }
    });

    res.status(200).json({ userOrders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};


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
  const {_id, orderStatus} = req.body;
  
  // Check if the necessary fields (orderId) are present
  if (!_id) {
    return res.status(400).json({ message: "Order ID is missing" });
  }

  try {
    // Find the order by ID
    const order = await Order.findById(_id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Update order field individually if they exist in the request body
    if (orderStatus) order.orderStatus = orderStatus;

    // Save the updated order
    const updatedOrder = await order.save();

    res.status(200).json({
      message: 'Order updated successfully',
      order: updatedOrder,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error updating order',
      error: err.message,
    });
  }

}