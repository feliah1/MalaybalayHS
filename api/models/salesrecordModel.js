const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    date: {
        type: Date,
        default: Date.now,
    }
  })

const Payment = mongoose.model("sales", SalesSchema)
module.exports = Sales