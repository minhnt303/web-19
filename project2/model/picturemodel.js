const mongoose = require('mongoose');
const PictureSchema = new mongoose.Schema({
    type:{
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    }


});

const picturetModel = mongoose.model('Picture', PictureSchema);
module.exports = picturetModel;
