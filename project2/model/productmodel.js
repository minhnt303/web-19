const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    openingimage: {
        type: String,
        default: "https://cdn.ubi-tech.co.uk/wp-content/uploads/sites/2/2012/06/Ubi-Tech-Home-Banner-Large.jpg",
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    },
    detail: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    evaluate: {
        type: Number,
        default: 0,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    seller: {
        type: String,
        require: true,
    },
    discount: {
        type: Number,
        default: 0,
        require: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },

});

const productModel = mongoose.model('Product', ProductSchema);
module.exports = productModel;
