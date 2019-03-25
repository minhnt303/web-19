const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const productModel = require('./model/productmodel');
const picturetModel = require('./model/picturemodel');

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

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server is listen on post 3000..')
    });
});