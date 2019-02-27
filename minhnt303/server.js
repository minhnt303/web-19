const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const server = express();
const newQuestion = {
    id: '',
    content: '',
    yes: 0,
    no: 0,
    createdTime: ''
}
// const o = [];

// o.push(newQuestion);

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/', (req, res) => {
    // res.send('Hello world!!')
    res.status(200).send('Hello expressjs 12345')
});

server.get('/create-question', (req, res) => {
    // res.send('Hello world!!')
    res.status(200).sendFile(path.resolve(__dirname + '/public/create-question.html'));
});

// server.post('/create-question',(req,res) => {
//     console.log(req.body);
//     res.status(201).end('Success');
// });

server.post('/create-question', (req, res) => {
    //id, cotent, yes, no , createdtime
    // newQuestion.content = req.body;
    // var json = JSON.stringify(o);
    // fs.writeFile('./data.json',json,(err)=>{
    //         if(err) throw err;
    //         console.log('write file success!!');
    //     });
    // console.log(req.body);

    fs.readFile('./data.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error!!!');
        }

        const question = JSON.parse(data);
        question.push({
            id: question.length,
            content: req.body.content,
            yes: 0,
            no: 0,
            createdTime: new Date().toLocaleString(),
        });

        fs.writeFile('./data.json', JSON.stringify(question), (err) => {
            if (err) { res.status(500).send('Internal server error!!!'); }
            res.status(201).end('Success');
        });

        // console.log(JSON.parse(data));
        // console.log(typeof data);
        // console.log('write file success!!');
    });
});
// server.get('/create-question.css',(req, res) => {
//     // res.send('Hello world!!')
//     res.status(200).sendFile(path.resolve(__dirname + '/public/create-question.css'));
// });

server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server is listen on post 3000..')
});