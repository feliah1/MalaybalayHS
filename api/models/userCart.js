const mongoose = require('mongoose');

const UserCartSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    userQuantity:{
        type: String
    }
})

const UserCart = mongoose.model("userCart", UserCartSchema)
module.exports = UserCart