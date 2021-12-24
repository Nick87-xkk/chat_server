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

const studentController= require('../controllers/studentController');
const {param} = require("express/lib/router");

// 获取学生信息
router.get('/get_student', studentController.showStudent);
//
router.post('/add_student', studentController.addStudent);

router.post('/delete_student',studentController.deleteStudent)
module.exports = router;
