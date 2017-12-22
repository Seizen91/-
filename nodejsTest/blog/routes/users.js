var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('userIndex', {content: '你当前现在在用户主页！'});
  //res.send('respond with a resource');
});

router.post('/test', function (req, res, next) {
  var username = req.body.username;
  console.log(username);
  res.send({"status": "success"});

});

module.exports = router;
