var http = require('http');


var server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end('Hello asdasdasdadsdadfld');
});

var port = 8080;

server.listen(port);