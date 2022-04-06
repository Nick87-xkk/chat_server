const UserController = require('../models/userModule.js');
const md5 = require('js-md5');
const {
    param
} = require("express/lib/router");

const userController = {
    // 验证登录
    verificationUser: async (req, res) => {
        try {
            // console.log(md5("a123456"));
            console.log(req.body);
            let user = await UserController.selectByAccount(req.body.account)
            console.log(user);
            // MD5比对
            let pd = md5(user[0].password)
            req.body.pd === pd ?
                res.json({
                    code: 200,
                    message: 'success',
                }) :
                res.json({
                    code: 100,
                    message: 'failed',
                })
        } catch (error) {
            res.json({
                code: 0,
                message: error
            })
        }
    },
    // 用户注册
    userRegistration: async (req, res) => {
        try {
            console.log(req);
            res.json({
                code: 200,
                message: 'success'
            })
        } catch (error) {
            res.json({
                code: 0,
                message: error
            })
        }
    },
    // 修改密码
    changePassword: async (req, res) => {
        try {
            console.log(req);
            res.json({
                code: 200,
                message: 'success'
            })
        } catch (error) {
            res.json({
                code: 0,
                message: error
            })
        }
    }
}

module.exports = userController