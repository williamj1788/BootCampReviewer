var http = require('http');

var server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end('Hello asdasdasdadsdadfld');
});
server.listen(8080);