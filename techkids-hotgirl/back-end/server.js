const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const userRouter = require('./api/users/routes')
const postRouter = require('./api/posts/routes')
const authRouter = require('./api/auth/routes')
const expressSession = require('express-session');
const registerfrontEndRoutes = require('../front-end/register/routes');
const mainfrontEndRoutes = require('../front-end/main/routes')

mongoose.connect('mongodb://localhost:27017/techkids-hotgirl', (err) => {
    if (err) {
        throw err;
    }
    console.log('connect to mongodb success')

    const app = express();

    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(expressSession({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    }))

    //routes
    app.use('/api/users', userRouter);
    app.use('/api/posts', postRouter);
    app.use('/api/auth', authRouter);

    // app.use('/', registerfrontEndRoutes);
    app.get('/register',(req,res)=>{
        res.status(200).sendFile(path.resolve(__dirname + '/public/register.html'));
    });
    app.get('/login',(req,res)=>{
        res.status(200).sendFile(path.resolve(__dirname + '/public/login.html'));
    });
    app.use('/', mainfrontEndRoutes);
    //start server
    app.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server is listen on post 3000..')  
    });
});