const mongoose = require('mongoose');
const PointSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     require: true,
    // },
    // round: {
    //     type: Number,
    //     default: 0,
    // },
    // point: {
    //     type: Number,
    //     default: 0,
    // }

    player1: {
        name1: {
            type: String,
            require: true,
        },
        roundplayer1: [{
            round1: {
                type: Number,
                default: 0,
            },
            point1: {
                type: Number,
                default: 0,
            }
        }]
    },
    player2: {
        name2: {
            type: String,
            require: true,
        },
        roundplayer2: [{
            round2: {
                type: Number,
                default: 0,
            },
            point2: {
                type: Number,
                default: 0,
            }
        }]
    },
    player3: {
        name3: {
            type: String,
            require: true,
        },
        roundplayer3: [{
            round3: {
                type: Number,
                default: 0,
            },
            point3: {
                type: Number,
                default: 0,
            }
        }]
    },
    player4: {
        name4: {
            type: String,
            require: true,
        },
        roundplayer4: [{
            round4: {
                type: Number,
                default: 0,
            },
            point4: {
                type: Number,
                default: 0,
            }
        }]
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
