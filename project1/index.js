// // const http = require("http");
// // // const fs = require("fs");

// // const server = http.createServer((req, res) => {
// //   res.setHeader("Content-Type", "text/html");
// //   let url = req.url;
// //   if (url === "/") {
// //     res.write("home");
// //   } else if (url === "/about") {
// //     res.write("about");
// //   } else if (url === "/home") {
// //     res.write("my page not found");
// //     res.write("<!DOCTYPE html/>");
// //     res.write(
// //       `
// //     <html>
// //     <head>
// //     <title>Aircampus</title>
// //     </head>
// //     <body><h1>Hello</h1>
// //     <form action="/message" method="post" >
// //     <input type="text" name="data" />
// //     <button>send</button>
// //     </form>
// //     </body>
// //     </html>`
// //     );
    
// //   } else if (url === "/message") {
// //     const body = [];
// //     req.on("data", chunk => {
// //       console.log(chunk, "chunk");
// //       body.push(chunk);
// //     });

// //     req.on("end", () => {
// //       const parsedBody = Buffer.concat(body).toString();
// //       console.log(parsedBody, "data");
// //     });
// //     // console.log(req.body, "body");
// //   }
// //   res.end();
// // });

// // server.listen(3000);




// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   let url = req.url;
//   if (url === "/") {
//     res.write("my page not found");
//     res.write("<!DOCTYPE html/>");
//     res.write(
//       `
//     <html>
//     <head>
//     <title>Aircampus</title>
//     </head>
//     <body><h1>Hello</h1>
//     <form action="/message" method="post" >
//     <input type="text" name="data" />
//     <button>send</button>
//     </form>
//     </body>
//     </html>`
//     );
//     res.end()
//   } else if (url === "/message") {
//     const body = [];
//     req.on("data", chunk => {
//       console.log(chunk, "chunk");
//       body.push(chunk);
//     });

//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       // console.log(parsedBody, "data");
      
//       const data = parsedBody.split('=')[1]
//       fs.writeFile("storedata.txt",data,()=>{})
//       res.statusCode =302;
//       res.setHeader("Location",'/')
//       res.end();
//     });
//     // console.log(req.body, "body");
   
//   }


 
// });

// server.listen(3000);









