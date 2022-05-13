const conversionModule = require("../models/mysql/conversionModule");

const conversionController = {
    //  创建会话
    createConversion: async (req, res) => {
        try {
            let state = await conversionModule.createConversion(req.body);
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
    // 查询会话
    searchConversion: async (req, res) => {
        try {
            let result = await conversionModule.searchConversion(req.body);
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
    // 更新最新消息
    updateConversionLatestMessage: async (req, res) => {
        try {
            let state = await conversionModule.updateConversionLatestMessage(req.body);
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
    }
}

module.exports = conversionController;