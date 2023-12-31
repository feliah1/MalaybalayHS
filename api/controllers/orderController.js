const Order = require ('../models/orderModel')

//accept order function missing
//test if these functions are working

exports.getOrder = async ( req, res, next ) => {
    try{
        const orders = await Order.find(); // Retrieve all products without any filters
  
        res.json(orders); // Respond with all the products fetched
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
      }
}

exports.deleteOrder = async ( req, res, next ) => {
    const { _id } = req.body
    await Order.findById(_id)
      .then(order => order.deleteOne())
      .then(order =>
        res.status(201).json({ message: "Order successfully deleted", order })
      )
      .catch(error =>
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message })
          )
}

exports.acceptOrder = async ( req, res, next ) => {

}