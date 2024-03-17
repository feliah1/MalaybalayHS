const Mongoose = require("mongoose")

const UserSchema = new Mongoose.Schema({
  email: {
    type: String,
    unique: true, // Ensures uniqueness of email across all roles
    required: true, // Make sure email is always provided
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  }
})

const User = Mongoose.model("user", UserSchema)
module.exports = User