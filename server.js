var http = require('http');
http.createServer(function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
}).listen(80);
console.log('Server started on localhost:80; press Ctrl-C to terminate...!');
