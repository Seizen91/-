/**
 * Created by DELL on 2017/9/5.
 */

//引入异步流程控制对象async
var async = require('async');

function oneFun() {
    var i = 0;
    setInterval(function () {
        console.log("oneFun: " + new Date());
        i++;
        if(i == 3){
            clearInterval(this);
        }
    }, 1000);

    console.log("oneFun执行完毕");
}

function twoFun() {
    var i = 0;
    setInterval(function () {
        console.log("twoFun: " + new Date());
        i++;
        if(i == 3){
            clearInterval(this);
        }
    }, 1000);

    console.log("twoFun执行完毕");
}

//oneFun();
//twoFun();
//console.log("主进程执行完毕");

function exec() {

    /*
    * 串行无关联：async.series，当one中的done第一个参数不是null时，会导致two直接不执行
    * 多个函数依次执行，之间没有数据交换，其中一个函数出错，，后续函数不会执行
    */
    //并行无关联：async.parallel，当one中的done第一个参数不是null时，会导致two中done方法不执行
    /*async.parallel(
        {
            one: function (done) {
                var i = 0;
                setInterval(function () {
                    console.log("oneFun: " + new Date());
                    i++;
                    if(i == 3){
                        clearInterval(this);
                        done('出错', 'one over');
                    }
                }, 1000);

            },
            two: function (done) {
                var i = 0;
                setInterval(function () {
                    console.log("twoFun: " + new Date());
                    i++;
                    if(i == 3){
                        clearInterval(this);
                        done(null, 'two over');
                    }
                }, 1000);

            }
        },function (err, rs) {
            console.log(err);
            console.log(rs);
        }
    )*/

    /*
    * 串行有关联（瀑布流）：async.waterfall，该方式中使用的是方括号，上面两个使用的是大括号，
    * 另外，该方式中从第二个方法就开始是两个参数，一个是上一个方法中done传过来的值，而且方法不能有别名
    */
    async.waterfall(
        [
            function (done) {
                var i = 0;
                setInterval(function () {
                console.log("oneFun: " + new Date());
                i++;
                if(i == 3){
                    clearInterval(this);
                    done(null, 'one over');
                }
            }, 1000);

        },
        function (preValue, done) {  //preValue是上一个值
            var i = 0;
            setInterval(function () {
                console.log(preValue+"twoFun: " + new Date());
                i++;
                if (i == 3) {
                    clearInterval(this);
                    done(null, preValue + '，two over');
                }
            }, 1000);
        }
        ],function (err, rs) {
            console.log(err);
            console.log(rs);
        }

    )
}
exec();
console.log("主进程执行完毕");


