const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    orderProductQuantity:{
        type: Number
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    orderStatus: {
        type: String,
      },
    
  })

const Order = mongoose.model("order", orderSchema)
module.exports = Order