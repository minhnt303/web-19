const mongoose = require('mongoose');
const UsertSchema = new mongoose.Schema({
    username: {
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
    },
    cart:{
        type: Array,
        require:true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const userModel = mongoose.model('User', UsertSchema);
module.exports = userModel;
