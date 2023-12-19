const Mongoose = require("mongoose")

const UserSchema = new Mongoose.Schema({
  email: {
    type: String,
    unique: function() {
      return this.role !== 'cashier'; // Make email unique unless the role is 'cashier'
    },
    required: function() {
      return this.role !== 'cashier'; // Make email required unless the role is 'cashier'
    },
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
   username: {
     type: String,
     unique: true,
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