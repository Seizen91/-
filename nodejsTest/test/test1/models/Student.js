/**
 * Created by DELL on 2017/8/21.
 */

var User = require('./User')
function Student(id, name, age) {

    //Student继承User
    User.apply(this, [id, name, age]);

    this.study = function (res) {
        res.write(this.name+'学习');
    }
}

module.exports = Student