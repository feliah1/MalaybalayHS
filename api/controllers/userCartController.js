const UserCart = require("../models/userCart")
const Product = require("../models/productModel")
const mongoose = require('mongoose');

//checkout
//view all products from cart//
//update product from cart {not important}

//get all products chose by user in the cart
exports.getCartOfUser = async (req, res) => {
    //get product ids based on user id in userCart table => returns list of prodids
    //get product details from the product id => returns prod details
    //make function to display product details
    //return joint details of productName, productQuantity, description, and price
    //compute total through backend

    const loggedInUserId = req.body.userId;
    
    try {
        const userCart = await UserCart.find({ userId: new mongoose.Types.ObjectId(loggedInUserId) });// Retrieve all products without any filters
        const productIds = userCart.map(c => c.productId.toString());

            // Find a product by its _id
        const obj_ids = productIds.map(function(id) { return new mongoose.Types.ObjectId(id); });
        const products = await Product.find({_id: {$in: obj_ids}});
        //no quantity fro now

        const userCartProducts = {
            'userCart': userCart,
            'products': products
        }
        
        // Respond with the found product
        res.status(200).json({ userCartProducts });

    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};

//add product to cart
exports.AddToCart = async (req, res, next) => {
    const { userId, productId, productQuantity } = req.body
    try {
      await UserCart.create({
        userId, 
        productId, 
        productQuantity
      }).then(cart =>
        res.status(200).json({
          message: "Added Successfully to cart",
          cart,
        })
      )
    } catch (err) {
      res.status(401).json({
        message: "Added Unsuccessfully to cart",
        error: err.message,
      })
    }
  }

//delete product from cart
exports.DeleteCart = async (req, res, next) => {

    const id  = new mongoose.Types.ObjectId(req.body.id);

    await UserCart.findById(id)
      .then(userCart => userCart.deleteOne())
      .then(userCart =>
        res.status(201).json({ message: "Product successfully deleted", userCart })
      )
      .catch(error =>
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message })
      )
    }
