//users models
//email (uniq)
//password
//fbId
//firstName
//lastName
//avatarUrl
//createdAt
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    facebookId: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    avatarUrl: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date, 
        default: new Date(),
    }
});

const userSchema = mongoose.model('User', UserSchema);
module.exports = userSchema;
