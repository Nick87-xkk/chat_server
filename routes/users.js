var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const {
  param
} = require("express/lib/router");
// 验证登录
router.post('/user/login', userController.verificationUser);
// 注册
router.post('/user/register', userController.userRegistration);
// 修改密码
router.post('/user/change', userController.changePassword)

module.exports = router;