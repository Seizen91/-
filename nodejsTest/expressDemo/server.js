/**
 * Created by DELL on 2017/9/11.
 */

var express = require('express');
var birds = require('./birds');

var app = express();
app.use('/birds', birds);

//没有挂在路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
   console.log("Time:"+ Date.now());
    next();
});

//挂在至/user/:id的中间件，任何指向/user/:id的请求都会执行它
/*app.use('/user/:id', function (req, res, next) {
    console.log("Request Type: " + req.method);
    next();
});

//路由和句柄函数（中间件系统），处理指向/user/:id的GET请求
app.get('/user/:id', function (req, res, next) {
    res.send("USER");
});*/

//一个中间件栈，对任何指向/user/:id的HTTP请求打印出相关信息
app.use('/user/:id', function (req, res, next) {
    console.log("Request URL: " + req.originalUrl);
    next();
}, function (req, res, next) {
    console.log("Request Type: " + req.method);
    next();
});

//一个中间件栈，处理指向/user/:id的GET请求
app.get('/user/:id', function (req, res, next) {
    //如果user id 为0， 跳到下一个路由
    if(req.param.id == 0)next('route');

    //否则将控制权交给栈中下一个中间件
    else next();
}, function (req, res, next) {
    //渲染常规页面
    res.render('regular');
});

//处理/user/:id， 渲染一个特殊页面
app.get('/user/:id', function (req, res, next) {
    res.render('special');
});


var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});