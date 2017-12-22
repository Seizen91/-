/**
 * Created by DELL on 2017/9/6.
 */

var http = require('http');
var UserBean = require('./UserBean');

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    if(req.url !== "/favicon.ico"){
        userBean = new UserBean();
        userBean.eventEmit.once('zhuceSuc', function (uname, pwd) {
            res.write("注册成功");
            console.log('传来的name：'+ uname);
            console.log('传来的pwd：'+ pwd);
            userBean.login(req, res);
            res.end();
        }); //注册监听
        userBean.regist(req, res);
    }
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
