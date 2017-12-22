/**
 * Created by DELL on 2017/7/3.
 */

var http = require('http');
var queryString = require('querystring');

var postData = queryString.stringify({
    'content': '一起期待下一期的课程',
    'cid':348
});

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '',
    method: 'POST',
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':40,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=b0b83df5-96a0-47cb-b35a-adbb71cdac5f; imooc_isnew_ct=1496306018; PHPSESSID=ccv7novren51ul9bje7d23eu87; loginstate=1; apsid=k5YzM3NjFjNmIwODdjMWFkYjZjNjdhNzdmOTliNDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjA2ODEyNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNDc1Nzk1MjI0QHFxLmNvbQAAAAAAAAAAAAAAAAAAAGRlZGIxYjhkMTI0NTFiZGI0YWRiMzU4NTJhMWMwYzBlhedZWYXnWVk%3DNT; last_login_username=1475795224%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1498708943,1498732115,1498794740,1499051989; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1499064218; imooc_isnew=2; cvde=5959b7d95537f-16',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/comment/348',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
};

var req = http.request(options, function (res) {
    console.log('Status: '+ res.statusCode);
    console.log('headers: '+ JSON.stringify(res.headers));

    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof  chunk);
    });

    res.on('end', function () {
        console.log('请求完毕');
    });
});

req.on('error', function (e) {
    console.log('Error: '+ e.message);
});

req.write(postData);
req.end();