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
    }
});

const userModel = mongoose.model('User', UsertSchema);
module.exports = userModel;
