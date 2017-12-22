/**
 * Created by DELL on 2017/6/29.
 */

function Pet(words) {
    this.words = words;
    this.speak = function () {
        console.log(words);
    }
}

//call实现继承
function Dog(words) {
    Pet.call(this, words);
    //Pet.apply(this, arguments);
}

var dog = new Dog('Wang');

dog.speak();

