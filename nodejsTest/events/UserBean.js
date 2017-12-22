/**
 * Created by DELL on 2017/9/6.
 */

var events = require('events');
var http = require('http');

function UserBean() {
    this.eventEmit = new events.EventEmitter();
    this.regist = function (req, res) {
        console.log("regist .....");
        req['uname'] = "aa";
        req['pwd'] = "bb";
        this.eventEmit.emit("zhuceSuc", "aa", "bb");  //抛出事件消息
    };

    this.login = function (req, res) {
        console.log("login ......");
        console.log(req['name']);
        res.write("用户名：" + req['uname']);
        res.write("密码：" + req['pwd']);
        res.write("登录");
    }
}

module.exports =  UserBean;
