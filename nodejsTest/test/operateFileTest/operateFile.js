/**
 * Created by DELL on 2017/8/21.
 */

var fs = require('fs');

module.exports =  {
    readFileSync: function (path) {   //同步读取
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log('同步方法执行完毕');
        return data;
    },

    readFile: function (path, recall) {    //异步执行
        fs.readFile(path, function (err, data) {
            if(err){
                console.log(err);
            }else {
                console.log(data.toString());
                recall(data);
            }
        });
        console.log('异步方法执行完毕');
    },

    //写文件
    writeFile: function (path, data, recall) {  //异步方式
        fs.writeFile(path, data, function (err) {
            if(err){
                throw err;
            }
            console.log('It\'s saved'); //文件被保存
            recall('写文件成功')
        })
    },
    writeFileSync: function (path, data) { //同步方式
        fs.writeFileSync(path, data);
        console.log('同步写文件完成');
    },

    //读取图片
    readImg: function (path, res) {
        fs.readFile(path, 'binary', function (err, filedata) {
            if(err){
                console.log(err);
                return;
            }else {
                console.log('输出文件');
                //res.writeHead(200, {'Content-Type': 'image/jpeg'});
                res.write(filedata, 'binary');
                res.end();
            }
        })
    }
};


