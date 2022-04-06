const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const {
  param
} = require("express/lib/router");
// 验证登录
router.post('/login', userController.verificationUser);
// 注册
router.post('/register', userController.userRegistration);
// 修改密码
router.post('/change', userController.changePassword)

module.exports = router;