 const http=require('http');
 var dt=require('./myfirstmodule');

 http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write("Hello World \nToday is : "+dt.GiveDate())
  res.write("\n"+dt.PrintMyName());
  res.write('\n'+dt.practice('Adeel'));
  //res.write('\n'+dt.practice_2('Muzammil'));
  res.end("\nKilling the response object here")
 }

 ).listen(8080, ()=>{
     console.log("THe server is running  on port 8080")
 })

 /*
 http.createServer((req,res)=>{
     res.wrriteHead(200, {'Contetnt-Type': 'text/plain'});
     res.end('Resonse i s ended');
 }

 ).listen(8080);
 */