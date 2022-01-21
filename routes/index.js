const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.type('html') //解决客户端接收到的html未被渲染
  res.render('socketIO')
  // res.render('index', { title: 'Express' });
});


router.get('/demo', (req, res, next) => {
  res.send(JSON.stringify({
    name: '李四',
    age: 23,
    job: 'programer'
  }))
});



module.exports = router;
