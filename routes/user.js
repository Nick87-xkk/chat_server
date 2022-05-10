const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const friendController = require("../controllers/friendController");

// 验证登录
router.post('/login', userController.verificationUser);
// 注册
router.post('/register', userController.userRegistration);
// 修改密码
router.post('/change', userController.changePassword);
// 搜索用户
router.post('/searchUser', userController.searchUser);
// 检索用户好友列表
router.get('/selectUserFriend',friendController.selectUserFriend);
// 获取会话列表
router.get('/searchConversion',friendController.searchConversion);
// 获取分组信息
router.get('/searchFriendGroups',friendController.searchFriendGroups);
// 发送好友请求
router.post('/friendRequest', userController.friendRequest);
module.exports = router;
