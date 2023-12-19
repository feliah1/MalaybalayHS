const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const jwtSecret = '7b7e03a9c80a1471c1191483bc9b418ed653af0dbe2789483b1e1de70d449258c47e21'

exports.registerCashier = async (req, res, next) => {
  try {
      const { username, password } = req.body; // Only include username and password

      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({
          username,
          password: hash,
          role: "cashier" // Set the role explicitly for a cashier
      });

      const maxAge = 3 * 60 * 60;
      const token = jwt.sign(
          { id: user._id, username, role: "cashier" },
          jwtSecret,
          { expiresIn: maxAge }
      );

      res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000,
      });

      res.status(201).json({
          message: "Cashier successfully created",
          user: user._id,
      });
  } catch (error) {
      res.status(400).json({
          message: "Cashier not successfully created",
          error: error.message,
      });
  }
};