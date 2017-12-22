/**
 * Created by DELL on 2017/8/22.
 */

var http = require('http');

var operateFile = require('./operateFile');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    if(req.url !== '/favicon.ico'){
        operateFile.readImg('./img/welcome.png',res);
    }

});
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080');