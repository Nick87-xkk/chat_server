const userModel = require('../models/mysql/userModule.js');

const userController = {
    // 验证登录
    verificationUser: async (req, res) => {
        try {
            console.log(req.body);
            let user = await userModel.selectByAccount(req.body.account)
            console.log(user);
            // MD5比对
            let pd = user[0].password
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
            let {account, newPd} = req.body;
            let flag = await userModel.changePassword(account, newPd);
            res.json({
                code: 200,
                message: flag
            })
        } catch (error) {
            res.json({
                code: 0,
                message: error
            })
        }
    },
    // 搜索用户
    searchUser: async (req, res) => {
        try {
            let {account, nickname} = req.body;
            let userInfo = '';
            if (account) {
                userInfo = await userModel.searchByAccount(account);
            } else if (nickname) {
                userInfo = await userModel.searchByNickname(nickname);
            }
            if (userInfo.length) {
                res.json({
                    code: 200,
                    message: userInfo
                })
            } else {
                res.json({
                    code: 100,
                    message: 'failed'
                })
            }
        } catch (error) {
            res.json({
                code: 0,
                message: error
            })
        }
        //    账号搜索、昵称搜索

    }
}

module.exports = userController
