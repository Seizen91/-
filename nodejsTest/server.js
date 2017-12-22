/**
 * Created by DELL on 2017/6/29.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello NodeJS\n')
}).listen(1377, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1377/');
