const mongoose = require('mongoose');
const SellerRegisterSchema = new mongoose.Schema({
    seller: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    info:{
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const sellerRegisterModel = mongoose.model('SellerRegister', SellerRegisterSchema);
module.exports = sellerRegisterModel;
