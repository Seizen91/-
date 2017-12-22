/**
 * Created by DELL on 2017/8/21.
 */

var http = require('http');
var url = require('url');
var router = require('./router');
var expection = require('./expection');
var server = http.createServer(function (req, res) {

    if(req.url !== '/favicon.ico'){
        var pathname = url.parse(req.url).pathname;
        console.log(pathname);
        pathname = pathname.replace(/\//, ''); //替换掉前面的/
        console.log(pathname);

        //异常捕获与处理,同步异常使用try-catch
        try{
            router[pathname](req, res);
           /* data = expection.expfun(0);
            res.write(data);
            res.end('');*/
        }catch (err){
            console.log('aaaa=' + err);
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write(err.toString());
            res.end('');
        }
        console.log("server执行完毕");


    }

});

server.listen(8080);
console.log('Server running at http://127.0.0.1:8080');
