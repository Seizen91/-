/**
 * Created by DELL on 2017/8/21.
 * 模块调用
 */

var http = require('http');
//var User = require('./models/User');
//var Teacher = require('./models/Teacher');
var Student = require('./models/Student');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    if(req.url !== '/favicon.ico'){  //清除第2次访问
        //teacher = new Teacher(1, '张三', 20);
        student = new Student(1, '张三', 20);

        /*user.id = 1;
        user.name = '张三';
        user.age = 20;*/
        //teacher.enter();
        //teacher.teach(res);

        student.enter();
        student.study(res);
        res.end('')
    }
});

server.listen(8080);
console.log('Server running at http://127.0.0.1:8080');

