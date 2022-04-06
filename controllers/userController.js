const userController = require('../models/userModule.js');
const {param} = require("express/lib/router");

const userController = {
    // 验证登录
    verificationUser: async (req,res)=>{
        try {
            console.log(req);
            res.json({
                code:200,
                message:'success'
            })
        } catch (error) {
            res.json({
                code:0,
                message:error
            })
        }
    },
    // 用户注册
    userRegistration: async (req,res)=>{
        try {
            console.log(req);
            res.json({
                code:200,
                message:'success'
            })
        } catch (error) {
            res.json({
                code:0,
                message:error
            })
        }
    },
    // 修改密码
    changePassword: async (req,res)=>{
        try {
            console.log(req);
            res.json({
                code:200,
                message:'success'
            })
        } catch (error) {
            res.json({
                code:0,
                message:error
            })
        }
    }
}

module.exports = userController