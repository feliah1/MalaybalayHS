const express = require("express")
const router = express.Router()
const { createProduct, editProduct, deleteProduct, getAllProducts, getProductsByIds, getProduct, searchProduct } = require("../controllers/itemInventory")

router.route("/createProd").post(createProduct)
router.route("/searchProd").get(searchProduct)
router.route("/editProd").post(editProduct)
router.route("/deleteProd/:id").delete(deleteProduct)
router.route("/getAllProd").get(getAllProducts)
router.route("/getProd/:id").get(getProduct)
router.route("/getProds").post(getProductsByIds)


module.exports = router
