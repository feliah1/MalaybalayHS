const express = require("express")
const router = express.Router()
const { register, login, update, deleteUser, adminAuth  } = require("../controllers/authController");
const{ registerCashier } = require("../controllers/cashierAccount")

router.route("/register").post(register)
router.route("/login").post(login);
router.route("/update").put(adminAuth, update)
router.route("/deleteUser").delete(deleteUser)

module.exports = router