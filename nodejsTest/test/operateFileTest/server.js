/**
 * Created by DELL on 2017/8/21.
 */

var http = require('http');
var operateFile = require('./operateFile');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html; charset = utf-8'});
    if(req.url !== '/favicon.ico'){
        //operateFile.readFileSync('./views/login.html');
        function recall(data) {
            res.write(data);
            res.end('ok');
        }
        operateFile.readFile('./views/login.html', recall);
        console.log('主程序执行完毕');
    }
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080');