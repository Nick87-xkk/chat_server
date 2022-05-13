const Base = require('./base');
const knex = require("./knex");

class MessageModule extends Base {
    constructor() {
        super();
        this.messageTable = 'chattest.message'
    }
    // 聊天消息入库
    addMessage(data){
        return knex(this.messageTable).insert({
            "account":data.account,
            "receive_account":data.receive_account,
            "content_type":data.content_type,
            "content":data.content,
            "time":data.time
        });
    }
    // 消息查找
    searchMessage(data){
        return knex(this.messageTable).where({
            "account":data.account,
            "receive_account":data.receive_account,
        }).orWhere({
            "account":data.receive_account,
            "receive_account":data.account,
        }).select()
    }
}

module.exports = new MessageModule();