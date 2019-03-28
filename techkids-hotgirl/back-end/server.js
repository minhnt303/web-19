const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./api/users/routes')
const postRouter = require('./api/posts/routes')
mongoose.connect('mongodb://localhost:27017/techkids-hotgirl', (err) => {
    if (err) {
        throw err;
    }
    console.log('connect to mongodb success')

    const app = express();

    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //routes
    app.use('/api/users', userRouter);
    app.use('/api/posts', postRouter);

    //start server
    app.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server is listen on post 3000..')
    });
});