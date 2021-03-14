var express = require('express')
var R1=require('./Route_r1')
var Rbook=require('./Bookroute')
var Rfaculty=require('./Facultyroute')

var app=express()
//http://localhost:3000/books
app.use('/books',Rbook)

app.use('/faculty',Rfaculty)

app.route('/students')

.get((req, res)=>{
    res.send("Retrieve all students")
})

.post((req, res)=>{
    res.send("Add a student")
})

.delete((req, res)=>{
    res.send("Delete a student")
})

.put((req, res)=>{
    res.send("Update a Sstudent")
})
// http://localhost:3000/products
app.use('/products', R1)


var server=app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})
