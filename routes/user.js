const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
// 验证登录
router.post('/login', userController.verificationUser);
// 注册
router.post('/register', userController.userRegistration);
// 修改密码
router.post('/change', userController.changePassword);
// 搜索用户
router.post('/searchUser', userController.searchUser);

module.exports = router;
