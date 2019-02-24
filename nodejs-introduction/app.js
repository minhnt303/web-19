const fs = require('fs');
const path = require('path');

// fs.writeFile('./test.txt', `
//     Test Nodejs
//     hahahahaha1haha
//     111
//     hello world!!!1111
// `, (err)=>{
//     if(err) throw err;
//     console.log('write file success!!');
// });

// fs.readFile('./test.txt',(err, data)=>{
//     if(err) throw err;
//     console.log(data);
//     console.log(data.toString());
//     console.log('read file success!!!')
// });

// fs.readdir('../html-css-homework-buoi3',(err,file)=>{
//     if(err)throw err;
//     console.log(file);
//     console.log('read dir success')
// });

// fs.unlink('./test.txt',(err)=>{
//     if (err) throw err;
//     console.log('delete file success');
// });

// fs.watchFile('./test.txt',(curr,prev)=>{
//     console.log(curr);
//     console.log(prev);
// })

// path.dirname('./test');

console.log(__dirname);