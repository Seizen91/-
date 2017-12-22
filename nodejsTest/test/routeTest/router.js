/**
 * Created by DELL on 2017/8/21.
 */

var operateFile = require('./operateFile');
var url = require("url");
var querystring = require('querystring'); //post请求需要

var OptPool = require("../operatePool/OptPool");

function getRecall(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    function recall(data) {
        res.write(data);
        res.end('ok');
    }

    return recall;
}
module.exports = {
    login: function (req, res) {
        //res.write('this is login function')
        //get方式采接收参数
       /* var rdata = url.parse(req.url, true).query;
        console.log(rdata);
        if(rdata['email'] != undefined){
            console.log(rdata['email']);
            console.log(rdata['pwd']);
        }*/

       //post方式接收参数，post是密文提交，能够接收更大字节的参数，而get请求接收的参数是有限制的
        var post = "";  //定义了一个post变量，用于暂存请求体的信息
        req.on('data', function (chunk) {  //通过req的data事件监控
            post += chunk;
        });

        //注意异步
        req.on('end', function () {   //在end事件触发后，通过
            post = querystring.parse(post);
            console.log('收到参数email：'+ post['email'] + '\n');
            console.log('收到参数pwd：'+ post['pwd'] + '\n');

            //连接数据库
            var optPool = new OptPool();
            var pool = optPool.getPool();
            pool.getConnection(function (err, conn) {
                if(err){
                    console.log("error: "+ err);
                    return;
                }

                //插入
                var sql = "insert into user(username, password) values(?, ?)";
                var param = [post['email'], post['pwd']];
                conn.query(sql, param, function (err, rs) {
                    if(err){
                        console.log("error message: "+ err.message);
                    }
                    console.log("insert success");
                    conn.release();  //放回连接池
                });
            });

            arr = ['email', 'pwd'];
            function recall(data) {
                dataStr = data.toString();
                for(var i=0; i<arr.length; i++){
                    re = new RegExp("{" + arr[i] + "}", "g");        // /\{name\}/
                    dataStr = dataStr.replace(re, post[arr[i]]);
                }
                res.write(dataStr);
                res.end();
            }
            //recall = getRecall(req, res);
            operateFile.readFile('./views/login.html', recall);
        });


    },

    regist: function (req, res) {
        //res.write('this is regist function')
        recall = getRecall(req, res);
        operateFile.readFile('./views/regist.html', recall);
    },

    writeFile: function (req, res) {
        function recall(data) {
            res.write(data);
            res.end('ok');
        }
        operateFile.writeFile('./views/one.txt', '我的写入文件', recall)
    },

    writeFileSync: function (req, res) {
        operateFile.writeFileSync('./views/one.txt', '我的同步写入文件');
        res.write('同步写文件');
        res.end();
    },


    showImg: function (req, res) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        operateFile.readImg('./img/welcome.png',res);
    }

};

