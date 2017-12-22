/**
 * Created by DELL on 2017/9/5.
 */

//使用连接池
var OptPool = require('./OptPool');

var optPool = new OptPool();
var pool = optPool.getPool();

//从连接池中获取一个连接
pool.getConnection(function (err, conn) {
    if(err){
        console.log("error: "+ err);
        return;
    }

    //插入
    var sql = 'insert into user (username, password) values (?, ?)';
    var param = ['宋珍', 'sz123456'];
    conn.query(sql, param, function (err, rs) {
        if(err){
            console.log('insert err:', err.message);
            return;
        }
        console.log('insert success');
        conn.release(); //放回连接池
    });

    //查询
    conn.query('select * from user where id =?',[1], function (err, rs) {
        if(err){
            console.log('query err:', err.message);
            return;
        }
        for(var i=0; i<rs.length; i++){
            console.log('The solution is: ', rs[i].username);
        }
        conn.release(); //放回连接池
    });


});