
const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./Routes/product');
const authRoutes = require('./Routes/auth')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(productRoutes);
app.use(authRoutes)

app.use((req,res)=>{
         res.redirect('/products')
})
app.listen(3000);

















// const express = require('express');
// const bodyParser = require('body-parser');

// const productRoutes = require('./routes/products');
// const authRoutes = require('./routes/auth')
// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(productRoutes);
// app.use(authRoutes)
// app.listen(3000);




















// const express = require("express")

// const app = express()

// //  app.use((req,res,next)=>{
// //     let isInvalid = true
// //     if(isInvalid){
// //       console.log('login')
// //       next()
// //     }else{
// //         res.send('invalid')
// //     }
      
// //  })

// //  app.use('/home',(req,res,next)=>{
// //       res.send("wellcome to facebook")
// //  })



// app.use((req,res,next)=>{
//     res.send('hello')
//     next()
// })

// app.use('/home',(req,res,next)=>{
//     // res.send('wellcome to facebook')
//     console.log("second")
//     next()
// })
// app.use('/home',(req,res,next)=>{
//     res.send('page not  found')
// })


// app.listen(3000)































