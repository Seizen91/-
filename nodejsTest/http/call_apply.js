/**
 * Created by DELL on 2017/6/29.
 */

var pet = {
    words: '...',
    speak: function (say) {
        console.log(say + ' ' + this.words);
    }
};

/*
pet.speak('Speak');*/

var dog = {
    words: 'wang'
};

pet.speak.call(dog, 'Speak');
