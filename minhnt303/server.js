const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const localStorage = require('node-localstorage');
var store = require('store')
const server = express();
const newQuestion = {
    id: '',
    content: '',
    yes: 0,
    no: 0,
    createdTime: ''
}
// const o = [];
const a = 0;
// o.push(newQuestion);

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/', (req, res) => {
    // res.send('Hello world!!')
    console.log("Request to route / ");
    let question = getRandomQues();
    let a = question;
    let htmlSource = fs.readFileSync("./public/answer-question.html", "utf8");
    // fs.readFile('./data.json', (err, data) => {
    //     if (err) {
    //         res.status(500).send('Internal server error!!!');
    //     }
    //     const question = JSON.parse(data);
    //     console.log(question[1].content);
    // });
    // res.status(200).sendFile(path.resolve(__dirname + '/public/answer-question.html'));
    // htmlSource = htmlSource.replace("./api/question/","./api/question/" + question.id.toString());
    res.status(200).send(htmlSource.replace("{question}", question.content));
    store.set('id', a.id)
    console.log(a.id)
    console.log(store.get('id'))
});
// server.get("/", (request, respone) => {
//     console.log("Request to route / ");
//     let question = getRandomQues();
//     let htmlSource = fs.readFileSync("./home_page/home_page.html","utf8");
//     htmlSource = htmlSource.replace("./api/question/","./api/question/" + question.id.toString());
//     respone.status(200).send(htmlSource.replace("{question}", question.content));
//     });

function getRandomQues() {
    const arraydata = JSON.parse(fs.readFileSync("data.json", "utf8"));
    const index = Math.floor(Math.random() * (arraydata.length));
    return arraydata[index];
}
server.get('/create-question', (req, res) => {
    // res.send('Hello world!!')
    res.status(200).sendFile(path.resolve(__dirname + '/public/create-question.html'));
});
server.post('/answer-question', (req, res) => {
    console.log(store.get('id'))
    let htmlSource = fs.readFileSync("./public/result.html", "utf8");
    let data = JSON.parse(fs.readFileSync("data.json"));
    htmlSource = htmlSource.replace("{question}", data[store.get('id')].content);

    console.log(data[store.get('id')].yes)
    if (req.body["btn-click"] == "yes") {
        data[store.get('id')].yes++;
        console.log(data[store.get('id')].yes)
        fs.writeFile('./data.json', JSON.stringify(data), (err) => {
            if (err) { res.status(500).send('Internal server error!!!'); }
            htmlSource = htmlSource.replace("{vote}", data[store.get('id')].yes + data[store.get('id')].no);
            res.status(200).send(htmlSource);
        });
    }
    else if (req.body["btn-click"] == "no") {
        data[store.get('id')].no++;
        console.log(data[store.get('id')].no)
        fs.writeFile('./data.json', JSON.stringify(data), (err) => {
            if (err) { res.status(500).send('Internal server error!!!'); }
            htmlSource = htmlSource.replace("{vote}", data[store.get('id')].yes + data[store.get('id')].no);
            res.status(200).send(htmlSource);
        });
    }
});
server.get('/result', (req, res) => {
    // res.send('Hello world!!')
    let htmlSource = fs.readFileSync("./public/result.html", "utf8");
    let data = JSON.parse(fs.readFileSync("data.json"));
    htmlSource = htmlSource.replace("{question}", data[store.get('id')].content);
    htmlSource = htmlSource.replace("{vote}", data[store.get('id')].yes + data[store.get('id')].no);
    console.log(data[store.get('id')].id)
    console.log(data[store.get('id')].yes + data[store.get('id')].no)
    res.status(200).send(htmlSource);
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

        console.log(JSON.parse(data));
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
