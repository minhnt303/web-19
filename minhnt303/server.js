const express = require('express');
const path = require('path');
const server = express();

server.use(express.static('public'));

server.get('/',(req, res) => {
    // res.send('Hello world!!')
    res.status(200).send('Hello expressjs 12345')
});

server.get('/create-question',(req, res) => {
    // res.send('Hello world!!')
    res.status(200).sendFile(path.resolve(__dirname + '/public/create-question.html'));
});

// server.get('/create-question.css',(req, res) => {
//     // res.send('Hello world!!')
//     res.status(200).sendFile(path.resolve(__dirname + '/public/create-question.css'));
// });

server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server is listen on post 3000..')
});