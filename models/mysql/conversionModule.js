const Base = require('./base');
const knex = require("./knex");

class ConversionModule extends Base{
    constructor() {
        super();
        this.conversionTable = 'chattest.conversion'
    }
    // 新建会话
    createConversion(data){
        return knex(this.conversionTable).insert({
            "create_account":data.create_account,
            "member_account":data.member_account
        })
    }
    // 查询会话
    searchConversion(data){
        return knex(this.conversionTable).where({
            "create_account":data.account
        }).orWhere({
            "member_account":data.account
        }).select()
    }
    // 更新最新消息
    updateConversionLatestMessage(data){
        return knex(this.conversionTable).where({
            "create_account":data.create_account,
            "member_account":data.member_account
        }).orWhere({
            "create_account":data.member_account,
            "member_account":data.create_account
        }).update({
            "latest_message":data.latest_message
        })
    }
}

module.exports = new ConversionModule();