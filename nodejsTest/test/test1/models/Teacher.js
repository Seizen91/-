/**
 * Created by DELL on 2017/8/21.
 */

var User = require('./User');
function Teacher(id, name, age) {

    User.apply(this, [id, name, age]);  //teacher继承了User

    this.teach = function (res) {
        res.write(this.name+'讲课 ');
    }

}

module.exports = Teacher;