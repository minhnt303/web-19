const mongoose = require('mongoose');
const PointSchema = new mongoose.Schema({

    player1: {
        name1: {
            type: String,
            require: true,
        },
        total1: {
            type: Number,
            default: 0,
            required : true
        },
        // roundplayer1: [{
        //     round1: {
        //         type: Number,
        //         default: 0,
        //     },
        //     point1: {
        //         type: Number,
        //         default: 0,
        //     }
        // }]
        point1: {
            type: Array,
            default: 0,
            required : true
        },
        round1: {
            type: Number,
            default: 1,
            required : true
        },
    },
    player2: {
        name2: {
            type: String,
            require: true,
        },
        total2: {
            type: Number,
            default: 0,
            require: true,
        },
        // roundplayer2: [{
        //     round2: {
        //         type: Number,
        //         default: 0,
        //     },
        //     point2: {
        //         type: Number,
        //         default: 0,
        //     }
        // }]
        point2: {
            type: Array,
            default: 0,
            required : true
        },
        round2: {
            type: Number,
            default: 1,
            required : true
        },
    },
    player3: {
        name3: {
            type: String,
            require: true,
        },
        total3: {
            type: Number,
            default: 0,
            required : true
        },
        // roundplayer3: [{
        //     round3: {
        //         type: Number,
        //         default: 0,
        //     },
        //     point3: {
        //         type: Number,
        //         default: 0,
        //     }
        // }]
        point3: {
            type: Array,
            default: 0,
            required : true
        },
        round3: {
            type: Number,
            default: 1,
            required : true
        },
    },
    player4: {
        name4: {
            type: String,
            require: true,
        },
        total4: {
            type: Number,
            default: 0,
            require: true,
        },
        // roundplayer4: [{
        //     round4: {
        //         type: Number,
        //         default: 0,
        //     },
        //     point4: {
        //         type: Number,
        //         default: 0,
        //     }
        // }]
        point4: {
            type: Array,
            default: 0,
            require: true,
        },
        round4: {
            type: Number,
            default: 1,
            required : true
        },
    }

    // name1: {
    //     type: String,
    //     require: true,
    // },
    // name2: {
    //     type: String,
    //     require: true,
    // },
    // name3: {
    //     type: String,
    //     require: true,
    // },
    // name4: {
    //     type: String,
    //     require: true,
    // },
    // round: [{
    //     roundid: {
    //         type: Number,
    //         default: 0,
    //     },
    //     point1:{
    //         type: Number,
    //         default: 0,
    //     },
    //     point2:{
    //         type: Number,
    //         default: 0,
    //     },
    //     point3:{
    //         type: Number,
    //         default: 0,
    //     },
    //     point4:{
    //         type: Number,
    //         default: 0,
    //     }
    // }]
});

const pointModel = mongoose.model('Point', PointSchema);
module.exports = pointModel;
