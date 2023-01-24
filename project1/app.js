




// // // module.exports = {
// // //     a : 10,
// // // //     b :30
// // // // }
// // // module.exports = {
// // //     a : 10,
// // //     b :30,
// // //     z :function(){
// // //         return 10
// // //     }
// // // }


// // const fs = require('fs')
// // // fs.writeFileSync("hema.txt","learning node.js")
// // // it will creates the file hema.txt
// // fs.writeFileSync("code.txt","wellcome")
// // // console.log(__dirname)
// // // for check directory name
// // // for check file
// // console.log(__filename)
// const http = require('http')
// const server = http.createServer((req, res) => {

// res.setHeader('Content-Type', 'text/html');
// let url = req.url;
// if(url == '/'){
//     res.write('<!DOCTYPE html>');
//     res.write('<html>')
//     res.write('<head><title>AirCampus</title></head>');
//     res.write(`
//     <body>
//     <form method="post" action="/message">
//     <input type="text" name="name"/>
//     <button type="submit">submit</button>
//     </form>
//     </body>
//     `)
//     res.write('</html>');
//     res.end()
// }else if(url == '/message'){
//     const body = []
//     req.on('data', (chunk)=>{
//             console.log(chunk);
//             body.push(chunk)
//     });
//     req.on('end', ()=>{
//         const parsedBody = Buffer.concat(body).toString()
//         // console.log(parsedBody);
//     })
//     console.log(req.body);
// }
// });



// server.listen(3000)