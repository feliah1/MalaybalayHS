const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
    },
    price: {
        type: Number,
    },
    payment:{
        type: String
    }
  })

const Payment = mongoose.model("payment", paymentSchema)
module.exports = Payment