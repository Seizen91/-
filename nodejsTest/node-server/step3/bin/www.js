/**
 * Created by DELL on 2017/8/18.
 */

var app = require('../app');
var http = require('http');
console.log(app);

http.createServer(app).listen(8080);
console.log('open http://localhost:8080');