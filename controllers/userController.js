const userModel = require('../models/mysql/userModule.js');

const userController = {
    // 验证登录
    verificationUser: async (req, res) => {
        try {
            console.log(req.body);
            let user = await userModel.selectByAccount(req.body.account)
            // console.log(user);
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
            console.log(req.body)
            let flg1 = await userModel.userRegistration(req.body)
            let flg2 = await userModel.userRegistrationInfo(req.body)
            // console.log(req);
            res.json({
                code: 200,
                message: flg1,flg2
            })
        } catch (error) {
            console.log(error)
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
            let {user} = req.body;
            let userInfoByAccount;
            let userInfoByNickname;
            userInfoByAccount = await userModel.searchByAccount(user);
            userInfoByNickname = await userModel.searchByNickname(user);
            if (userInfoByNickname.length || userInfoByAccount.length) {
                res.json({
                    code: 200,
                    userInfoByAccount,
                    userInfoByNickname
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

    },
    // 好友申请
    friendRequest: async (req,res) => {
        try {
            console.log(req.body)
            let state = await userModel.friendRequest(req.body);
            res.json({
                code:200,
                message:'success'
            })
        }catch (e) {
            console.log(e)
            res.json({
                code:0,
                message:e
            })
        }
    },
    // 接收或拒绝好友申请
    AcceptOrRejectFriendRequest: async () => {
    },
    //
    batchSearchUser: async (req,res)=>{
        try {
            console.log(req.body)
            let results = await userModel.batchSearchUser(req.body.friends);
            res.json({
                code:200,
                message:results
            })
        }catch (e) {
            res.json({
                code:0,
                message:e
            })
        }
    }
}

module.exports = userController
