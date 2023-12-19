const express = require("express")
const router = express.Router()
const { createProduct, getProduct, editProduct, deleteProduct, getAllProducts, searchProduct } = require("../controllers/itemInventory")

router.route("/createProd").post(createProduct)
router.route("/searchProd").get(searchProduct)
router.route("/editProd").post(editProduct)
router.route("/deleteProd").delete(deleteProduct)
router.route("/getAllProd").get(getAllProducts)
router.route("/getProd/:id").get(getProduct)

module.exports = router
