let fs = require('fs');

// fs.readFile('text.txt','utf-8',(error,data)=>{
//    console.log(data.length) 
// })

// let text = fs.readFileSync('text.txt','utf-8')
// console.log(text)
// console.log('File was read succesful')

// fs.readdir('one',(error,data)=>{
//     console.log(data)
//     for(let i in data){
//         fs.readFile('one/'+data[i],'utf-8',(error,fileData)=>{
//             console.log(fileData)
//         })
//     }
    
// })

// const http = require('http');
// const url = require('url')
// http.createServer((request,response)=>{
//     console.log('server work')
//     if (request.method == 'GET'){
//         let urlRequest = url.parse(request.url, true)
//         if(urlRequest.query.test%2==0){
//             response.end('even')
//         }else{
//             response.end('odd')
//         }

//     }else{
//         // POST
//         let body ='';
//         request.on('data',chunk =>{
//             body+= chunk.toString();
//         });
//         request.on('end', ()=>{
//             console.log(body);
//             response.end('POST OK')
//         })
//     }
    
    
// }).listen(3000);

// const mysql = require('mysql');

// //configuration

// const conn= mysql.createConnection({
//     host: "itgid.mysql.tools",
//     user: "itgid_nodetest",
//     database: "itgid_nodecourse",
//     password: "Al6gAi50YiB0"
// })

// conn.connect(err =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('database OK')
//     }
// })