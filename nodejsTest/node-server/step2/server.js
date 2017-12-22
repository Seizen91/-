/**
 * Created by DELL on 2017/8/17.
 */

var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

var routes = {
    '/a': function (req, res) {
        res.end('match /a, query is:'+ JSON.stringify(req.query));
    },

    '/b': function (req, res) {
        res.end('match /b');
    },

    'a/c': function (req, res) {
        res.end('match /a/c');
    },

    '/search': function (req, res) {
        res.end('username='+req.body.username+', password='+ req.body.password);
    }
};

function routePath(req, res) {
    var pathObj = url.parse(req.url, true);
    console.log(pathObj);
    var handleFn = routes[pathObj.pathname];
    console.log("=================");
    console.log('handleFn:'+handleFn);
    if(handleFn){
        req.query = pathObj.query;

        var body = '';
        req.on('data', function (chunk) {
            body = chunk;
        }).on('end', function (body) {
            req.body = parseBody(body);
            handleFn(req, res);
        })
    }else {
        staticRoot(path.resolve(__dirname, 'static'), req, res);
    }
}

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

function parseBody(body){
    var obj = {};

    body.split('&').forEach(function(str){
        obj[str.split('=')[0]] = str.split('=')[1]
    });
    return obj
}
/*console.log(path.join(__dirname, 'static'));
console.log(path.resolve(__dirname, 'static'));*/

var server = http.createServer(function (req, res) {
    routePath(req, res);
});

server.listen(8080);
console.log('visit http://localhost:8080');


