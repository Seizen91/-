/**
 * Created by DELL on 2017/9/14.
 * 错误处理
 */

/*
var express = require('express');
var app = express();

/!*
 * 定义错误处理中间件需要4个参数
 *!/
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server starting at http://" + host + "/" + port);
});
*/

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);
