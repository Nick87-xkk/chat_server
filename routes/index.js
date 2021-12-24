var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/demo', (req, res, next) => {
  res.send(JSON.stringify({
    name: '李四',
    age: 23,
    job: 'programer'
  }))
});

const studentController = require('../controllers/studentController');

// 获取用户信息
router.get('/get_user', studentController.showStudent);

module.exports = router;
