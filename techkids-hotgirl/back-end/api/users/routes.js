const express = require('express');
const UserModel = require('./model')

const userRouter = express();

userRouter.post('/', async(req, res) => {
    //create users

    try {
        
        const exitEmail = await UserModel.findOne({
            email: req.body.email,
        }).exec();
        if(exitEmail){
            res.status(403).end('email has been used')
        }
        const userInfo = req.body;
        const newUser = await UserModel.create({
            ...userInfo,
            createAt: new Date(),
        });
        console.log(userInfo);
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).end(err.message)
    }
})

module.exports = userRouter;

