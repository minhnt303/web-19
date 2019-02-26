const express = require('express');
const path = require('path');
const server = express();

server.use(express.static('public'));

server.get('/',(req, res) => {
    res.status(200).sendFile(path.resolve(__dirname + '/public/web-app.html'));
});

server.get('/web10', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname + '/public/web/web10.html'));
});

server.get('/web11', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname + '/public/web/web11.html'));
});

server.get('/web12', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname + '/public/web/web12.html'));
});

server.get('/web13', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname + '/public/web/web13.html'));
});

server.get('/web14', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname + '/public/web/web14.html'));
});

server.get('/web15', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname + '/public/web/web15.html'));
});

server.get('/web16', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname + '/public/web/web16.html'));
});

// server.get('/create-question',(req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname + '/public/create-question.html'));
// });

server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server is listen on post 3000..')
});