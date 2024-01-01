const express = require("express")
const router = express.Router()
const { GetOrderOfUser, DeleteOrder, AddOrder, UpdateOrder } = require("../controllers/orderController")

router.route("/getorderfromuser/:userId").get(GetOrderOfUser)
router.route("/addorder").post(AddOrder)
router.route("/updateorder").post(UpdateOrder)
router.route("/deleteorder").delete(DeleteOrder)


module.exports = router;