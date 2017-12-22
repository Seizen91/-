/**
 * Created by DELL on 2017/8/21.
 * 多个函数调用与单个函数调用
 */

//支持多个函数
module.exports = {
    fun1: function (res) {
        console.log('fun1')
        res.write('this is fun1')
    },

    fun2: function (res) {
        console.log('fun2')
        res.write('this is fun2')
    }
}


//单个函数
/*
function fun3(res) {
    console.log('fun3')
    res.write('this is fun3')
}

module.exports= fun3*/
