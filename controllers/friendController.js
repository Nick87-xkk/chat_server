const redis = require('redis')
const url = require("../models/redis/redis.config");

const client = redis.createClient({
    url: url
})
const friendController = {
    //获取分组信息
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
    saveMessage: async (req,res)=>{},
   /*建立会话
   * 添加好友后向conversion表中添加两人会话
   * */
    addConversion:async (req,res)=>{},
    /* 销毁会话
    * 删除好友后从conversion表中删除对应会话
    * */
    removeConversion:async (req,res)=>{},
}

module.exports = friendController;