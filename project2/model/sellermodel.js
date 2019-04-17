const mongoose = require('mongoose');
const SellertSchema = new mongoose.Schema({
    seller: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

const sellerModel = mongoose.model('Seller', SellertSchema);
module.exports = sellerModel;
