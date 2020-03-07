var request = require('request');

var arg= "Hi there!";

process.argv.slice(2).forEach(function(val, index, array){
    arg+= val + " ";
})

request.post({
    url: "http://localhost:3000",
    json: true,
    body: {message: arg}
}, function(err, response, body){
    if(!err && response.statusCode==200){
        console.log(body);

    }
}) 