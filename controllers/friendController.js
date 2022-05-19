/*const redis = require('redis')
const url = require("../models/redis/redis.config");

const client = redis.createClient({
    url: url
})*/

const friendModule = require("../models/mysql/friendModule")
const {json} = require("express");

const friendController = {
    // 建立好友列表 ，仅在用户注册成功后执行
    createFriendInfo: async (req, res) => {
        try {
            let state = await friendModule.createFriendInfo(req.body)
            res.json({
                code: 200,
                message: state
            })
        } catch (e) {
            res.json({
                code: 0,
                message: e
            })
        }

    },
    //获取好友信息
    searchFriendInfo: async (req, res) => {
        try {
            let result = await friendModule.searchFriendInfo(req.body)
            res.json({
                code: 200,
                message: result
            })
        } catch (e) {
            res.json({
                code: 0,
                message: e
            })
        }

    },
    // 更新好友列表信息
    updateFriendInfo: async (req, res) => {
        try {
            console.log(req.body)
            let state = '';
            let result_info = await friendModule.searchFriendInfo(req.body);
            let json1 = JSON.parse(result_info[0].friend_account);
            let json2 = JSON.parse(req.body.friend_account);
            console.log(json1)
            console.log(json2)
            let key1 = Object.keys(json1);
            let key2 = Object.keys(json2)[0];
            if (key1.includes(key2)) {
                json1[key2].push(json2[key2][0])
                state = await friendModule.updateFriendInfo({
                    "account":req.body.account,
                    "friend_account":json1
                    })
            } else {
                json1[key2] = json2[key2];
                state = await friendModule.updateFriendInfo({
                    "account":req.body.account,
                    "friend_account":json1
                })
            }
            console.log(state)
                res.json({
                    code: 200,
                    message:state
                })
        } catch (e) {
            res.json({
                code: 0,
                message: e
            })
        }

    },
    // 创建好友请求
    createFriendRequest: async (req, res) => {
        try {
            let state = await friendModule.createFriendRequest(req.body)
            res.json({
                code: 200,
                message: state
            })
        } catch (e) {
            res.json({
                code: 0,
                message: e
            })
        }

    },
    // 查询好友请求
    searchFriendRequest: async (req, res) => {
        try {
            let result = await friendModule.searchFriendRequest(req.body)
            res.json({
                code: 200,
                message: result
            })
        } catch (e) {
            res.json({
                code: 0,
                message: e
            })
        }

    },
    // 更新好友请求
    updateFriendRequest: async (req, res) => {
        try {
            let state = await friendModule.updateFriendRequest(req.body)
            res.json({
                code: 200,
                message: state
            })
        } catch (e) {
            res.json({
                code: 0,
                message: e
            })
        }

    },


    /*//获取分组信息
    selectUserFriend: async (req, res) => {
        await client.zrangebyscore(
            `friend`, //key
            0, // min value
            10000, // max value
            (err, data) => {
                console.log(data)
                for (let x in data) {
                    data[x] = JSON.parse(data[x])

                    if (data[x].account == req.query.account) {
                        return res.json({
                            code: 200,
                            message: data[x]
                        })
                    }
                }
            }
        );
    },
    // 获取分组列表
    searchFriendGroups:async (req,res)=>{
        await client.zrangebyscore(
            `friend`, //key
            0, // min value
            10000, // max value
            (err, data) => {
                for (let x in data) {
                    data[x] = JSON.parse(data[x])
                    if (data[x].account == req.query.account) {
                        return res.json({
                            code: 200,
                            message: Object.keys(data[x].groups)
                        })
                    }
                }
            }
        );
    },
    // 添加分组信息
    addUserFriend: async (req,res)=>{},
    //更新分组信息
    updateUserFriend:async (req,res)=>{},
    // 首页消息列表
    searchConversion:async (req,res)=>{
    //    拿到conversion
    //     req.query.account
        let conversionList = []
        await client.zrangebyscore(
            `conversion`, //key
            0, // min value
            10000, // max value
            (err, data) => {

                for (let x in data){
                    data[x] = JSON.parse(data[x]);
                    // console.log(data[x].conversion_id.includes(Number(req.query.account)))
                   if (data[x].conversion_id.includes(Number(req.query.account))){
                       conversionList.push({
                           conversion_id:data[x].conversion_id,
                           lastMessage:data[x].message.pop()
                       });
                   }
                }
                return res.json({
                    code:200,
                    message:conversionList,
                })
            })

    },
    // 保存消息
    saveMessage: async (req,res)=>{
        client.zrange('friend',1,'account')
        // client.zadd()
    },
   /!*建立会话
   * 添加好友后向conversion表中添加两人会话
   * *!/
    addConversion:async (req,res)=>{},
    /!* 销毁会话
    * 删除好友后从conversion表中删除对应会话
    * *!/
    removeConversion:async (req,res)=>{},*/
}

module.exports = friendController;
