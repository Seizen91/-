/**
 * Created by DELL on 2017/8/17.
 */

var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

function staticRoot(staticPath, req, res) {

    console.log(req.url);
    var pathObj = url.parse(req.url, true);
    console.log(pathObj);

    if(pathObj.pathname === '/'){
        pathObj.pathname += 'index.html';
    }

    //通过判断文件类型来设置Content-Type
    var pathname = pathObj.pathname;
    var index = pathname.lastIndexOf('.');
    var ext = pathname.substr(index+1);
    console.log("-------------"+ext);
    if(ext === 'html'){
        res.setHeader('Content-Type', 'text/html');
    }else if(ext === 'js'){
        res.setHeader('Content-Type', 'text/js');
    }else if(ext === 'css'){
        res.setHeader('Content-Type', 'text/css');
    }

    var filePath = path.join(staticPath, pathname);

    //同步方式读取文件
    /*var fileContent = fs.readFileSync(filePath, 'binary');
    res.write(fileContent, 'binary');
    res.end();*/

    //异步读取文件
    fs.readFile(filePath, 'binary', function (err, fileContent) {
        if(err){
            console.log('404');
            res.writeHead(404, 'not found');
            res.end('<h1>404 not found</h1>');
        }else {
            console.log('ok');
            res.writeHead(200, 'OK');
            res.write(fileContent, 'binary');
            res.end();
        }
    })
}

console.log(path.join(__dirname, 'static'));
console.log(path.resolve(__dirname, 'static'));

var server = http.createServer(function (req, res) {
    staticRoot(path.join(__dirname, 'static'), req, res);
});

server.listen(8080);
console.log('visit http://localhost:8080');