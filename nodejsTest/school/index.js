/**
 * Created by DELL on 2017/6/29.
 */
var klass = require('./klass');

exports.add = function (klasses) {
    klasses.forEach(function (item, index) {
        var _klass = item;
        var teacherName = item.teacherName;
        var students = item.students;

        klass.add(teacherName, students);
    });
}
