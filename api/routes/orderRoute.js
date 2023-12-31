const express = require("express")
const router = express.Router()
const { GetOrder, DeleteOrder } = require("../controllers/orderController")

router.route("/getorder").get(GetOrder)
router.route("/deleteorder").post(DeleteOrder)


module.exports = router;