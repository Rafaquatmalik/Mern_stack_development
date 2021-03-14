var express=require('express')
var router=express.Router()
/*router.use((req, res, next)=>{
    console.log('Time: ',Date.now())
    next()
})*/
//htttp://localhost:3000/products
router.get('/',(req, res)=>{
    res.send("Welcome to my web Home page")
})

//htttp://localhost:3000/products/about
router.get('/about',(req, res)=>{
    res.send("Welcome to my  web About Page")
})

module.exports=router
