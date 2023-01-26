const express = require('express')
const path = require('path')
// calling router object and got router object
const router = express.Router()

router.use('/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','product.html'))
})

router.use('/add-products',(req,res)=>{
    // here path.join() will give directory addres in any device it will join auto 
    // forward slash and backword slash to it direname will give current directory
res.sendFile(path.join(__dirname,'..','views','add-products.html'))
})



// router.use('/product',(req,res)=>{
//     console.log(req.body)
//     res.redirect('/')
// })
module.exports = router;