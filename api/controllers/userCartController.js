const UserCart = require("../models/userCart")
const Product = require("../models/productModel")
const mongoose = require('mongoose');

//update

//get all products chose by user in the cart
exports.getCartOfUser = async (req, res) => {

    const loggedInUserId = req.params.userId.toString();

    try {
        const userCartData = await UserCart.find({ userId: new mongoose.Types.ObjectId(loggedInUserId) });
        const productIds = userCartData.map(c => c.productId.toString());

        // Find a product by its _id
        const obj_ids = productIds.map(function (id) { return new mongoose.Types.ObjectId(id); });
        const productsData = await Product.find({ _id: { $in: obj_ids } });

        var userCartProducts = [];
        userCartData.forEach(c => {

            var product = productsData.filter(d => {
                return d._id.toString() === c.productId.toString();
            });

            userCartProducts.push({
                "productId": product[0]._id,
                "productName": product[0].productName,
                "productDesc": product[0].description,
                "productQuantity": c.productQuantity,
                "productPrice": product[0].price,
                "productTotalPrice": product[0].price * c.productQuantity,
            });
        });

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
exports.DeleteCart = async (req, res) => {
    const { userId } = req.body;

    await UserCart.deleteOne({userId: new mongoose.Types.ObjectId(userId) })
    .then(() => {
      res.status(201).json({ message: "Cart is successfully deleted. Id: " + userId })

    })
    .catch(error =>
      res
        .status(400)
        .json({ message: "An error occurred", error: error.message })
    )
}