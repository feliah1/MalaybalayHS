const Product = require ('../models/productModel')
const Order = require ('../models/orderModel')

exports.getOrder = async ( req, res, next ) => {
    try{
        const orders = await Order.find(); // Retrieve all products without any filters
  
        res.json(orders); // Respond with all the products fetched
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
      }
}

