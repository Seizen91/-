/**
 * Created by DELL on 2017/9/14.
 */

var express = require('express');
var app = express();  //the main app
var admin = express(); //the sub app

/*app.get('/', function (req, res) {
    res.send("Hello World!");
});*/

admin.on('mount', function (parent) {
    console.log("Admin Mounted");
    console.log(parent);
});

admin.get('/', function (req, res) {
    console.log(admin.mountpath);
    res.send("Admin Homepage");
});

var secret = express();
secret.get('/', function (req, res) {
    console.log(secret.mountpath);
    res.send("Admin secret");
});

admin.use('/secr*t', secret);

app.use(['/adm*n', '/manager'], admin);




var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server starting at http://" + host + "/" + port);
});
