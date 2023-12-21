const express = require("express")
const router = express.Router()
const { getCartOfUser, AddToCart, DeleteCart } = require("../controllers/userCartController")

router.route("/getcartofuser/:id").get(getCartOfUser)
router.route("/addcartforuser").post(AddToCart)
router.route("/deletecart").delete(DeleteCart)


module.exports = router;