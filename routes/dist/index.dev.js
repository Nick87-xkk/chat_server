"use strict";

var express = require('express');

var res = require('express/lib/response');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.type('html'); //解决客户端接收到的html未被渲染

  res.render('socketIO'); // res.render('index', { title: 'Express' });
});
router.get('/demo', function (req, res, next) {
  res.send(JSON.stringify({
    name: '李四',
    age: 23,
    job: 'programer'
  }));
});
router.post('/demo/test', function (req, res, next) {
  var _req$query = req.query,
      user = _req$query.user,
      pwd = _req$query.pwd; // 接受、处理、存储、返回

  if (user == 1001) {
    res.send('1');
  } else {
    res.send('0');
  }
});
module.exports = router;