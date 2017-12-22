/**
 * Created by DELL on 2017/8/21.
 */

var htpp = require('http');

var otherFun = require('./js/mutipleFun')

var server = htpp.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    f1(res)

    //otherFun.fun1(res)
   // otherFun.fun2(res)

    //用字符串调用对应函数
    otherFun['fun1'](res);
    otherFun['fun2'](res);
    res.end()
})

server.listen(8080);

function f1(res) {
    console.log('------');
    res.write('hello world');

   // res.end()
}