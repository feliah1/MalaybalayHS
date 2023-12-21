const UserCart = require("../models/userCart")

//add to cart
//remove product from cart
//checkout
//view all products from cart
//update product from cart {not important}

exports.getAllProdCart = async (req, res) => {
    try {
      const userCart = await UserCart.find();// Retrieve all products without any filters
  
      res.json(userCart); // Respond with all the products fetched
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };