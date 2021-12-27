const express = require('express');
const router = express.Router();

const studentController= require('../controllers/studentController');
const {param} = require("express/lib/router");

// 获取学生信息
router.get('/get_student', studentController.showStudent);
// 添加
router.post('/add_student', studentController.addStudent);
// 删除
router.post('/delete_student',studentController.deleteStudent);
// 更新
router.post('/update_student',studentController.updateStudent);
// 按照id查询
router.post('/select_student',studentController.findStudentById);


module.exports = router;
