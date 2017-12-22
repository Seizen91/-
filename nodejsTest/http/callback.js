/**
 * Created by DELL on 2017/6/29.
 */
function learn(something) {
    console.log(something);
}

function we(callback, something) {
    something += ' is cool';
    callback(something);
}

we(learn, 'Nodejs');

we(function (something) {
    console.log(something)
}, 'Jade');
