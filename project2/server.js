const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const productModel = require('./model/productmodel');
const picturetModel = require('./model/picturemodel');
const userModel = require('./model/usermodel');
mongoose.connect('mongodb://localhost:27017/minhnt303', (err) => {
    if (err) {
        throw err;
    }
    console.log('connect to mongodb success')

    const server = express();

    server.use(express.static('public'));
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.get("/", (req, res) => {
        res.status(200).sendFile(path.resolve(__dirname + "/public/product/product.html"));
    });

    server.get("/api/product", async (req, res) => {
        productModel.find({}, function(err, product){
            if(err){
                res.send('something aSSADASD')
                next();
            }
            res.json(product)
        })
    });

    server.post("/api/product", async (req, res) => {
        var product = new productModel(req.body);
        product.save(function(err, product){
            res.json(product)
        })
    });

    server.get("/search/:searchname", (req, res) => {
        res.status(200).sendFile(path.resolve(__dirname + "/public/search/search.html"));
    });

    server.get("/detail/:productid",(req, res) => {
        res.status(200).sendFile(path.resolve(__dirname + "/public/detail/detail.html"));
    });

    server.get("/api/user", async (req, res) => {
        userModel.find({}, function(err, user){
            if(err){
                res.send('something aSSADASD')
                next();
            }
            res.json(user)
        })
    });

    server.get("/register",(req, res) => {
        res.status(200).sendFile(path.resolve(__dirname + "/public/register/register.html"));
    });

    server.get("/login",(req, res) => {
        res.status(200).sendFile(path.resolve(__dirname + "/public/login/login.html"));
    });

    server.post("/register",async (req, res) => {
        console.log(req.body);
        var user = new userModel(req.body);
        user.save(function(err, user){
            res.json(user)
        })
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server is listen on post 3000..')
    });
});