//title
//content
//description
//view
//like
//author: user._id

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    description: String,
    view: {
        type: Number,
        default: 0,
    },
    like: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
const PostModel = mongoose.model('Post', PostSchema);
module.exports = PostModel;

