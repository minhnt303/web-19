const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const localStorage = require('node-localstorage');
var store = require('store')
const mongoose = require('mongoose');
const questionModel = require('./model');
mongoose.connect('mongodb://localhost:27017/minhnt303',(err)=>{
    if(err){
        throw err;
    }
    console.log('connect to mongodb success')

const server = express();

server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// server.get('/', (req, res) => {
//     // res.send('Hello world!!')
//     // console.log("Request to route / ");
//     // let question = getRandomQues();
//     // let a = question;
//     // let htmlSource = fs.readFileSync("./public/answer-question.html", "utf8");
//     // res.status(200).send(htmlSource.replace("{question}", question.content));
//     // store.set('id', a.id)
//     // console.log(a.id)
//     // console.log(store.get('id'))

//     fs.readFile('./data.json', (err, data) => {
//         if (err) {
//             res.status(500).send('Internal server error!!!');
//         }
//         const question = JSON.parse(data);
//         const randomIndex = Math.floor(Math.random() * (question.length));
//         randomQuestion = question[randomIndex];
//         console.log(question[randomIndex].id, question[randomIndex].yes,question[randomIndex].no)
//         res.status(200).send(`
        
//         <!DOCTYPE html>
//     <html>

//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
//         <link rel="stylesheet" href="answer-question.css">
//         <title>Quyet De</title>
//     </head>

//     <body>
//         <ul>
//             <li><a href="#" class="home">
//                     Quyết.đê!
//                 </a></li>
//             <li><a href="http://localhost:3000/create-question" class="question">Hỏi nhanh</a></li>
//             <li><a href="http://localhost:3000/" class="answer">Đáp gọn</a></li>
//         </ul>

//         <div class="spacer" data-height="100" style="height: 20px;"></div>
//         <div class="container">
//                 <h1 class="text-center" id="text_question">
//                     ${randomQuestion.content}
//                 </h1>
//                 <div>
//                     <form name='yes' method='get' action='/vote/${randomQuestion.id}/yes'>
//                         <input type ='submit' value='yes'/>
//                     </form>
//                     <form name='no' method='get' action='/vote/${randomQuestion.id}/no'>
//                         <input type ='submit' value='no'/>
//                     </form>
//                 </div>
//                 <div class = 'form'>
//                 <div class = 'form-one'>
//                     <div class = 'form-button-false'>
//                         <button id ='nut-no' type="submit" value="no">
//                             <span><i class="fa fa-thumbs-o-down"></i></span>
//                             <p>Sai / Không / Trái</p>
//                             <div class ='clear'></div>
//                         </button>
//                     </div>
//                     <div class = 'form-button-true'>
//                         <button id = 'nut-yes' type="submit" value="yes">
//                             <span><i class="fa fa-thumbs-o-up color"></i></span>
//                             <p>Đúng / Có / Phải</p>
//                             <div class ='clear'></div>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//                 <div class="spacer" data-height="100" style="height: 60px;"></div>
//                 <div class="other-button">
//                     <!--<button id='question-result'>Result</button>
//                     <button id='other-question'>Other questions</button>-->
//                     <!-- <button type="submit" class="btn btn-default" name="btn_yesno" value="ketquavote">Kết quả vote</button> -->
//                 <a href="http://localhost:3000/result" class="answer2"name="btn_yesno" value="ketquavote">Kết quả vote</a>
//                 <!-- <button type="submit" class="btn btn-default" name="btn_yesno" value="cauhoikhac">Câu hỏi khác</button> -->
//                 <a href="http://localhost:3000/" class="answer2"name="btn_yesno" value="cauhoikhac">Câu hỏi khác</a>
//                 </div>
//         </div>
//         <script src='./public/index.js'></script>
// </body>

// </html>
//         `);
//     });
// });
server.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname + '/public/index.html'));});
// // function getRandomQues() {
// //     const arraydata = JSON.parse(fs.readFileSync("data.json", "utf8"));
// //     const index = Math.floor(Math.random() * (arraydata.length));
// //     return arraydata[index];
// // }
server.get('/create-question', (req, res) => {
    // res.send('Hello world!!')
    res.status(200).sendFile(path.resolve(__dirname + '/public/create-question.html'));
});
// server.post('/answer-question', (req, res) => {
//     console.log(store.get('id'))
//     let htmlSource = fs.readFileSync("./public/result.html", "utf8");
//     let data = JSON.parse(fs.readFileSync("data.json"));
//     htmlSource = htmlSource.replace("{question}", data[store.get('id')].content);

//     console.log(data[store.get('id')].yes)
//     if (req.body["btn-click"] == "yes") {
//         data[store.get('id')].yes++;
//         console.log(data[store.get('id')].yes)
//         fs.writeFile('./data.json', JSON.stringify(data), (err) => {
//             if (err) { res.status(500).send('Internal server error!!!'); }
//             yesPercent = caculatorPer(data[store.get('id')].yes / (data[store.get('id')].yes + data[store.get('id')].no)) * 100 + "%";
//             noPercent = caculatorPer(data[store.get('id')].no / (data[store.get('id')].yes + data[store.get('id')].no)) * 100 + "%";
//             htmlSource = htmlSource.replace("{vote}", data[store.get('id')].yes + data[store.get('id')].no);
//             htmlSource = htmlSource.replace("{yes}", yesPercent);
//             htmlSource = htmlSource.replace("{no}", noPercent);
//             res.status(200).send(htmlSource);
//         });
//     }

//     else if (req.body["btn-click"] == "no") {
//         data[store.get('id')].no++;
//         console.log(data[store.get('id')].no)
//         fs.writeFile('./data.json', JSON.stringify(data), (err) => {
//             if (err) { res.status(500).send('Internal server error!!!'); }
//             yesPercent = caculatorPer(data[store.get('id')].yes / (data[store.get('id')].yes + data[store.get('id')].no)) * 100 + "%";
//             noPercent = caculatorPer(data[store.get('id')].no / (data[store.get('id')].yes + data[store.get('id')].no)) * 100 + "%";
//             htmlSource = htmlSource.replace("{vote}", data[store.get('id')].yes + data[store.get('id')].no);
//             htmlSource = htmlSource.replace("{yes}", yesPercent);
//             htmlSource = htmlSource.replace("{no}", noPercent);
//             res.status(200).send(htmlSource);
//         });
//     }
// });
// function caculatorPer(x) {
//     return Number(x).toFixed(2);
// }
// server.get('/result', (req, res) => {
//     // res.send('Hello world!!')
//     let htmlSource = fs.readFileSync("./public/result.html", "utf8");
//     let data = JSON.parse(fs.readFileSync("data.json"));
//     htmlSource = htmlSource.replace("{question}", data[store.get('id')].content);
//     yesPercent = caculatorPer(data[store.get('id')].yes / (data[store.get('id')].yes + data[store.get('id')].no)) * 100 + "%";
//     noPercent = caculatorPer(data[store.get('id')].no / (data[store.get('id')].yes + data[store.get('id')].no)) * 100 + "%";
//     htmlSource = htmlSource.replace("{vote}", data[store.get('id')].yes + data[store.get('id')].no);
//     htmlSource = htmlSource.replace("{yes}", yesPercent);
//     htmlSource = htmlSource.replace("{no}", noPercent);
//     console.log(data[store.get('id')].id)
//     console.log(data[store.get('id')].yes + data[store.get('id')].no)
//     res.status(200).send(htmlSource);
// });

// // server.post('/create-question',(req,res) => {
// //     console.log(req.body);
// //     res.status(201).end('Success');
// // });

server.post('/create-question', async(req, res) => {
    console.log(req.body)
    //id, cotent, yes, no , createdtime
    // newQuestion.content = req.body;
    // var json = JSON.stringify(o);
    // fs.writeFile('./data.json',json,(err)=>{
    //         if(err) throw err;
    //         console.log('write file success!!');
    //     });
    // console.log(req.body);

    // fs.readFile('./data.json', (err, data) => {
    //     if (err) {
    //         res.status(500).send('Internal server error!!!');
    //     }

    //     const question = JSON.parse(data);
    //     question.push({
    //         id: question.length,
    //         content: req.body.content,
    //         yes: 0,
    //         no: 0,
    //         createdTime: new Date().toLocaleString(),
    //     });

    //     fs.writeFile('./data.json', JSON.stringify(question), (err) => {
    //         if (err) { res.status(500).send('Internal server error!!!'); }
    //         res.status(201).json({
    //             id:question.length -1,
    //         });
    //     });

    //     console.log(JSON.parse(data));
    //     // console.log(typeof data);
    //     // console.log('write file success!!');
    // });

    const newQuestion = {
        content: req.body.content,
    }

    const result = await questionModel.create(newQuestion);
    console.log(result);
    res.status(201).json({
        id: result._id,
    })
});

server.get('/vote/:questionId/:vote', async (req, res)=>{
    const {questionId, vote} = req.params;//tg dg: const questionId = req.params; const vote = req.params;
    console.log(questionId, vote);

    fs.readFile('./data.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error!!!');
        }

        const question = JSON.parse(data);
        for (let item of question){
            if(item.id == Number(questionId)){
                vote === 'yes' ? item.yes += 1 : item.no +=1;
                break;
                // console.log('2')
                // if(vote=='yes'){console.log('yes')}
                // else if(vote =='no'){console.log('no')}
            }
        }

        fs.writeFile('./data.json', JSON.stringify(question), (err)=>{
            if (err) {
                res.status(500).send('Internal server error!!!');
            }
            console.log(questionId, question[questionId].yes, question[questionId].no);
            res.status(200).send('Update question success!!');
        });
    });
});
server.get('/result/:questionId',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname + '/public/vote-result.html'));
});

server.get('/get-question-by-id',(req,res)=>{
    console.log(req.query)
    const questionId = req.query.questionId;
    fs.readFile('./data.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error!!!');
        }

        const question = JSON.parse(data);
        let selectQueston;
        for (let item of question){
            if(item.id === Number(questionId)){
                selectQueston = item;
                break;
            }
        };

        if(selectQueston){
            res.status(200).json(selectQueston);
        }else{
            res.status(200).json({message: 'Question not found'});  
        }
    });
});

server.get('/question-random', (req, res) => {
    fs.readFile("./data.json", (err, data) => {
      if (err) {
        res.status(500).send("error"); //luon luon check
      }
      const question = JSON.parse(data); 
      const randomIndex = Math.floor(Math.random() * question.length);
      const randomQuestion = question[randomIndex];
  
      if (randomQuestion) {
        res.status(200).json(randomQuestion); 
      } else {
        res.status(200).json({message: 'not found'}); 
      }
    });
  });

server.get('/random-question',(err,res)=>{
    fs.readFile('./data.json', (err, data) => {
                if (err) {
                    res.status(500).send('Internal server error!!!');
                }
                const question = JSON.parse(data);
                const randomIndex = Math.floor(Math.random() * (question.length));
                randomQuestion = question[randomIndex];

                res.status(200).json(randomQuestion); 
            })
});

server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server is listen on post 3000..')
});
})