const Base = require('./base');
const knex = require("../models/knex");

class UserModel extends Base {
    // 定义参数默认值为 student 表
    constructor(props = 'chattest.user') {
        super(props);
    }
    update(account, params) {
        return knex(this.table).where('account', '=', account).update(params);
    }

    selectByAccount(account){
        return knex(this.table).where('account','=',account).select()
    }
}

module.exports = new UserModel();
