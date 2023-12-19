const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment'
    },
    date: {
        type: Date,
        default: Date.now,
    }
  })

const Payment = mongoose.model("sales", SalesSchema)
module.exports = Sales