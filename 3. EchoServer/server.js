var express= require('express');
var bodyParser = require('body-parser');

var server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.post("/", function(req, res){
    console.log("I got "+ req.body.message);
    res.send(req.body.message);
})

server.listen(3000, "127.0.0.1", function(){
    console.log("Express echo server is listening on port 3000!");
})