/**
 * Created by DELL on 2017/9/5.
 */

//使用mysql直接连接，一般使用连接池连接mysql，效率比直接连接高效

var mysql = require('mysql');  //调用mysql模块
//创建一个connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',      //连接的数据库
    port: '3306'
});

//开始连接
connection.connect(function (err) {
    if(err){
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect] succeed');
});

//插入
var sql = 'insert into user (username, password) values (?, ?)';
var param = ['sssss', '11111'];
connection.query(sql, param, function (err, rs) {
    if(err){
        console.log('insert err:', err.message);
        return;
    }
    console.log('insert success');
});

//查询
connection.query('select * from user where id =?',[1], function (err, rs) {
    if(err){
        console.log('query err:', err.message);
        return;
    }
    for(var i=0; i<rs.length; i++){
        console.log('The solution is: ', rs[i].username);
    }
});

//删除和修改是一样的


//关闭connection
connection.end(function (err) {
    if(err){
        console.log(err.toString());
        return;
    }
    console.log('[connection end] succeed!');
});