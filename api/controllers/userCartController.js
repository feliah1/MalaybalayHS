const UserCart = require("../models/userCart")

//add to cart
//remove product from cart
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


    try {
      const userCart = await UserCart.find({userId: new mongoose.Types.ObjectId(loggedInUser)});// Retrieve all products without any filters
  
      res.json(userCart); // Respond with all the products fetched
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };



    //delete product from cart
    // exports.deleteProdCart = async (req, res, next) => {
    //     const { _id } = req.body
    //     await Product.findById(_id)
    //       .then(product => product.deleteOne())
    //       .then(product =>
    //         res.status(201).json({ message: "Product successfully deleted", product })
    //       )
    //       .catch(error =>
    //         res
    //           .status(400)
    //           .json({ message: "An error occurred", error: error.message })
    //           )
    //   }