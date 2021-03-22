const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/produt.route')
const mongoose= require('mongoose');

const app= express();
//-------Mogoose Connection----------
mongoose.connect('mongodb://localhost/productsDb',{useNewUrlParser: true, useUnifiedTopology: true}).
then(()=>{
    console.log("connected to the Database");
})
.catch(err =>{
    console.log("cannot connect to database!!!",err);
    process.exit();
});

//body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



//http://localhost:3000/products
app.use('/products', product);

app.listen(3000,()=>{
    console.log("Server is up and running at port 3000");
});