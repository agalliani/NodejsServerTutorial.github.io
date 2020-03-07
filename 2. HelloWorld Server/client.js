//we use request to manage http requests etc for the client
var request= require('request');

request.get("http://localhost:3000", function(err, res, body){
    if(!err && res.statusCode==200){
        console.log(body);
    }
})