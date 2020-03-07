var express= require('express');

var server=express();

//get is a simple http request
server.get("/", function(req, res){
    console.log("I got hit!");
    
    //this is the server answer
    res.send("Hello World!");
}) 

server.listen(3000, function(){
    console.log("Express server listening on port 3000");
})