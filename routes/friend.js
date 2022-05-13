const express = require('express');
const router = express.Router();

const friendController = require("../controllers/friendController");

// 创建好友
router.post("/createInfo",friendController.createFriendInfo);
// 检索用户好友列表
router.post('/searchInfo',friendController.searchFriendInfo);
// 更新好友信息
router.post("/updateInfo",friendController.updateFriendInfo);
// 创建好友请求
router.post("/createRe",friendController.createFriendRequest);
// 查询好友请求
router.post("/searchRe",friendController.searchFriendRequest);
// 更新好友请求
router.post("/updateRe",friendController.updateFriendRequest);

module.exports = router;