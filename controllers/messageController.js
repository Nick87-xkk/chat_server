const messageModule = require('../models/mysql/messageModule');
const conversionModule = require('../models/mysql/conversionModule')
const messageController = {
    // 消息入库
    addMessage: async (req,res)=>{
        try {
            let state = await messageModule.addMessage(req.body);
            await conversionModule.updateConversionLatestMessage({
                create_account: req.body.account,
                member_account: req.body.receive_account,
                latest_message: req.body.content
            })
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
            console.log(req.body)
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