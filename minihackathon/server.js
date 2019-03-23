const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const pointModel = require('./model');

mongoose.connect('mongodb://localhost:27017/minhnt303', (err) => {
    if (err) {
        throw err;
    }
    console.log('connect to mongodb success')

    const server = express();

    server.use(express.static('public'));
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    // server.get('/', (req, res) => {
    //     res.status(200).sendFile(path.resolve(__dirname + '/public/playscreen2.html'));
    // });
    // server.post('/', async(req, res) => {
    //     const newRound = {
    //         _id: req.body._id,
    //     }

    //     const result = await pointModel.create(newRound);
    //     console.log(result);
    //     res.status(201).json({
    //         id: result._id,
    //     })
    // });
    server.get("/", (req, res) => {
        res.status(200).sendFile(path.resolve(__dirname + "/public/index.html"));
    });

    server.post("/", async (req, res) => {
        const player = {
            player1: { name1: req.body.name1 },
            player2: { name2: req.body.name2 },
            player3: { name3: req.body.name3 },
            player4: { name4: req.body.name4 },
        }
        console.log(req.body.name1, req.body.name2)
        const result = await pointModel.create(player);
        console.log(result)
        res.status(201).json({
            id1: result._id
        });
    });


    server.get("/games/:gameId", (req, res) => {
        res
            .status(200)
            .sendFile(path.resolve(__dirname + "/public/playscreen2.html"));
    });

    server.get("/get-id-game", async (req, res) => {
        console.log(req.query)
        const gameId = req.query.gameId;
        const id = await pointModel.findById(gameId).exec();
        res.status(200).json(id);
    })

    server.post("/get-score/:gameId", async (req, res) => {
        const { gameId } = req.params;//tg dg: const questionId = req.params; const vote = req.params;
        const existedGame = await pointModel.findById(gameId).exec();
        
        console.log(req.body.point1, req.body.point2, req.body.point3, req.body.point4)
        const count = 1;

        let a1 = parseFloat(req.body.point1) + (existedGame.player1.total1);
        let b1 = existedGame.player1.point1
        let d1 = [parseFloat(b1)]

        if (existedGame.player1.round1 >= 3) {
            for(var i = 0; i < existedGame.player1.round1; i++){
                d1[i-1] = parseFloat(existedGame.player1.point1[i-1]);
                d1[existedGame.player1.round1-1] = parseFloat(req.body.point1);
            }
        } else if(existedGame.player1.round1 >= 0 && existedGame.player1.round1 <= 2){
            d1[existedGame.player1.round1 - 1] = parseFloat(req.body.point1)
        }
        let c1 = count + existedGame.player1.round1;

        let a2 = parseFloat(req.body.point2) + (existedGame.player2.total2);
        let b2 = existedGame.player2.point2
        let d2 = [parseFloat(b2)]

        if (existedGame.player2.round2 >= 3) {
            for(var i = 0; i < existedGame.player2.round2; i++){
                d2[i-1] = parseFloat(existedGame.player2.point2[i-1]);
                d2[existedGame.player2.round2-1] = parseFloat(req.body.point2);
            }
        } else if(existedGame.player2.round2 >= 0 && existedGame.player2.round2 <= 2){
            d2[existedGame.player2.round2 - 1] = parseFloat(req.body.point2)
        }
        let c2 = count + existedGame.player2.round2;

        let a3 = parseFloat(req.body.point3) + (existedGame.player3.total3);
        let b3 = existedGame.player3.point3
        let d3 = [parseFloat(b3)]

        if (existedGame.player3.round3 >= 3) {
            for(var i = 0; i < existedGame.player3.round3; i++){
                d3[i-1] = parseFloat(existedGame.player3.point3[i-1]);
                d3[existedGame.player3.round3-1] = parseFloat(req.body.point3);
            }
        } else if(existedGame.player3.round3 >= 0 && existedGame.player3.round3 <= 2){
            d3[existedGame.player3.round3 - 1] = parseFloat(req.body.point3)
        }
        let c3 = count + existedGame.player3.round3;

        let a4 = parseFloat(req.body.point4) + (existedGame.player4.total4);
        let b4 = existedGame.player4.point4
        let d4 = [parseFloat(b4)]

        if (existedGame.player4.round4 >= 3) {
            for(var i = 0; i < existedGame.player4.round4; i++){
                d4[i-1] = parseFloat(existedGame.player4.point4[i-1]);
                d4[existedGame.player4.round4-1] = parseFloat(req.body.point4);
            }
        } else if(existedGame.player4.round4 >= 0 && existedGame.player4.round4 <= 2){
            d4[existedGame.player4.round4 - 1] = parseFloat(req.body.point4)
        }
        let c4 = count + existedGame.player4.round4;
        await pointModel.updateOne({ _id: gameId }, {
            player1: {
                name1: existedGame.player1.name1,
                total1: a1,
                point1: d1,
                round1: c1
            },
            player2: {
                name2: existedGame.player2.name2,
                total2: a2,
                point3: d2,
                round4: c2
            },
            player3: {
                name3: existedGame.player3.name3,
                total3: a3,
                point3: d3,
                round3: c3
            },
            player4: {
                name4: existedGame.player4.name4,
                total4: a4,
                point4: d4,
                round4: c4
            },
        }
        );
        res.status(200).json({
            player1: { total1: a1,  round1: c1},
            player2: { total2: a2,  round2: c2},
            player3: { total3: a3,  round3: c3},
            player4: { total4: a4,  round4: c4},
        })
    })
    // server.post("/games", async (req, res) => {
    //     const newRound = {
    //         player1:{roundplayer1:[{round1: req.body.round1}]},
    //         player2:{roundplayer2:[{round2: req.body.round2}]},
    //         player3:{roundplayer3:[{round3: req.body.round3}]},
    //         player4:{roundplayer4:[{round4: req.body.round4}]}
    //     }
    //     console.log(req.body.round1, req.body.round2)
    //     const resultround = await pointModel.create(newRound);
    //     console.log(resultround)
    //     res.status(201).json({
    //         id1: resultround._id
    //     });
    // })
    server.listen(8080, (err) => {
        if (err) throw err;
        console.log('Server is listen on post 8080..')
    });
});