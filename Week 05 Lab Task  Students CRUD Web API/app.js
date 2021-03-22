const express= require('express');
const student= require('./routes/student.routes');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app=express();
//-------------Mongoose Connection----------------
mongoose.connect('mongodb://localhost/studentDb',{useNewUrlParser:true, useUnifiedTopology:true}
).then(()=>{
    console.log("Connected to the Databae!!!");
})
.catch(err=>{
    console.log("Cannot connect to the Database!!!",err);
    process.exit();
});

//using body_parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//http://localhost:3000/students
app.use('/students',student);


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});