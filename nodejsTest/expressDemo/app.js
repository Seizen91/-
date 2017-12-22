/**
 * Created by DELL on 2017/9/7.
 */

var express = require('express');

var birds = require('./birds');

var app = express();

app.get('/', function (req, res) {
    res.send("hello world");
});

app.get('/user', function (req, res) {
   res.send("user link");
});

app.post('/1', function (req, res) {
    res.send("post 请求");
});

/*
* 为请求处理提供多个回调函数
*/
//使用回调函数处理路由
app.get('/example/a', function (req, res, next) {
    console.log('a0 ......');
    next();
}, function (req, res) {
    res.send('hello from a');
});

//使用回调函数数组处理路由
var b0 = function (req, res, next) {
    console.log("b0");
    next();
};

var b1 = function (req, res, next) {
    console.log("b1");
    next();
};

var b2  = function (req, res) {
    res.send('hello from b');
};

app.get('/example/b', [b0, b1, b2]);

//混合使用函数和函数数组处理路由
app.get('/example/c', [b0, b1], function (req, res, next) {
    console.log('c0');
    next();
}, function (req, res) {
    res.send("hello from c");
});

//页面找不到的时候
app.use(function(req, res, next) {
    console.log("404 not found");
    res.status(404).send('Sorry cant find that!');
});

app.route('/book')
    .get(function (req, res) {
        res.send("Get a random book");
    })
    .post(function (req, res) {
        res.send('Add a book');
    });

app.use('/birds', birds);


var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

