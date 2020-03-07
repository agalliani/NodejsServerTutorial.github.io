This is a simple echo server.
Basically the server acts like a mirror. This means that anything it receives will be resent to the client. So, if the client sends "Hi there!", the server will write on console "I got" + client's message. The default case message is "Hi there!".

We can also send custom message using the variable arg:
code:
var arg= "Hi there!";

process.argv.slice(2).forEach(function(val, index, array){
    arg+= val + " ";
})

this because of the command structure: [node client.js arg]
another way is typing [npm run client -- arg]


We use express [npm install --save express], body-parser [npm install --save body-parser](which parse the information that we get from the requests for the server) and request [npm install --save request]

