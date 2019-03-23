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
        console.log(existedGame)
        console.log(existedGame.player1.total1)
        console.log(existedGame.player1.point1[0])
        console.log(existedGame.player1.round1)
        const count = 1;
        // const a = {
        //     player1: {
        //         name1: existedGame.player1.name1,
        //         roundplayer1: [{
        //             round1: 2,
        //             point1: 1
        //         }],
        //     }
        // }
        // const result = await pointModel.create(a);
        // console.log(result)
        // await pointModel.findByIdAndUpdate(gameId, {
        //     player1: {
        //         name1:existedGame.player1.name1,
        //         roundplayer1: [{
        //             round1: count++,
        //             point1: 1
        //         }]
        //     }
        // }).exec();
        console.log("total "+req.body.point1)
        let a = parseFloat(req.body.point1) + (existedGame.player1.total1);
        // let b = count + existedGame.player1.round1;
        console.log(a)
        await pointModel.updateOne({ _id: gameId }, {
            player1: {
                name1: existedGame.player1.name1,
                total1: a,
                point1: req.body.point1,
                round1: 1
            }
        },
        {$push:{point: 1}}
        );
        res.status(200).json({
            player1:{total1: a}
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