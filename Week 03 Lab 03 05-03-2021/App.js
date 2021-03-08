const express=require('express');

var app=express()
//http://localhost:3000
app.get('/',(req, res)=>{
    res.send("This is Malik's First Express Application")
})
//http://localhost:3000/Books
app.get('/Books',(req, res)=>{
res.send("Hello Malik Welcome to the Book Section")
})
//http://localhost:3000/Students
app.get('/Students',(req,res)=>{
res.send("<h1>Hello Malik Welcome to the Student Section</h1>")
})
//http://localhost:3000/
app.post('/',(req, res)=>{
 res.send("Malik has send a message to the server")
})
//http://localhost:3000/Students/34/books/4
app.get('/Students/:studentid/books/:bookid',(req,res)=>{
    res.send(req.params)
})
//http://localhost:300/malik
app.get('/:username',(req, res)=>{
res.send(req.params)
})
//http://localhost:3000/example/m
app.get('/example/m',(req,res,next)=>{
res.write("This is some text from Malik's first callback function")
next()
},(req,res)=>{
res.write("\nThis is text from Malik's second callback function")
res.end()
})

var mr0= function(req, res,next){
console.log("mr0")
next()
}

var mr1 = function(req, res, next){
console.log("mr1")
next()
}

var mr2= function(req, res){
res.send("Hello from Malik Rafaquat!")
}
//http://localhost:3000/example/r
app.get('/example/r',[mr0, mr1, mr2])

/*
app.all('/',(req, res)=>{
  res.send(" Tf you have come here This is due to wrong route selection")
})*/

var server=app.listen(3000,()=>{
    console.log("The server is up or running on port 3000")
})
