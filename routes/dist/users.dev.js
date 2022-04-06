"use strict";

var express = require('express');

var router = express.Router();

var userController = require('../controllers/userController');

var _require = require("express/lib/router"),
    param = _require.param; // 验证登录


router.post('/login', userController.verificationUser); // 注册

router.post('/register', userController.userRegistration); // 修改密码

router.post('/change', userController.changePassword);
module.exports = router;