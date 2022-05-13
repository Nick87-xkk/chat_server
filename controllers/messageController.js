const messageModule = require('../models/mysql/messageModule');

const messageController = {
    // 消息入库
    addMessage: async (req,res)=>{
        try {
            let state = await messageModule.addMessage(req.body);
            res.json({
                code: 200,
                message: state
            })
        }catch (e) {
            res.json({
                code: 0,
                message: e
            })
        }
    },
    // 查询全部消息
    searchMessage:async (req,res)=>{
        try {
            let result = await messageModule.searchMessage(req.body);
            res.json({
                code:200,
                message:result
            })
        }catch (e) {
            res.json({
                code:0,
                message:e
            })
        }
    }
}

module.exports = messageController