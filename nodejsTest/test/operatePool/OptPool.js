/**
 * Created by DELL on 2017/9/5.
 */

//连接池连接数据库
var mysql = require('mysql');

function OptPool() {
    this.flag = true; //是否连接过
    this.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test',      //连接的数据库
        port: '3306'
    });

    this.getPool = function () {
        if(this.flag){  //第一次初始化
            //监听connection事件
            this.pool.on('connection', function (connection) {
                connection.query('SET SESSION auto_increment_increment = 1');
                this.flag = false;
            })
        }
        return this.pool;
    }
}

module.exports = OptPool;


