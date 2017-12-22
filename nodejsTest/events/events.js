/**
 * Created by DELL on 2017/7/3.
 */

var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(11);

// addEventEmitter

function water(who) {
    console.log('给 '+ who + ' 倒水1');
}

life.on('求安慰',water);

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水2');
});

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水3');
});

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水4');
});

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水5');
});

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水6');
});

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水7');
});

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水8');
});

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水9');
});

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水10');
});

life.on('求安慰',function (who) {
    console.log('给 '+ who + ' 倒水11');
});

life.on('求溺爱',function (who) {
    console.log('给 '+ who + ' 买衣服');
});

/*life.emit('求安慰', '汉子');*/

life.removeListener('求安慰', water);
life.removeAllListeners('求安慰');

//查看事件是否被监听
var hasConfortListener = life.emit('求安慰', '汉子');
var hasLovedListener = life.emit('求溺爱', '妹子');

console.log(life.listeners('求安慰').length);
console.log(life.listeners('求溺爱').length);
console.log(EventEmitter.listenerCount(life, '求安慰'));

/*var hasPlayedListener = life.emit('求玩坏', '妹子和汉子');*/

/*console.log(hasConfortListener);
console.log(hasLovedListener);
console.log(hasPlayedListener);*/
