const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    userid: {
        type: String,
        require: true,
    },
    
    product:{
        type: String,
        require:true,
    },
    summoney:{
        type: Number,
        require:true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const orderModel = mongoose.model('Order', OrderSchema);
module.exports = orderModel;
