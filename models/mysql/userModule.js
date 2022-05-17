const Base = require('./base');
const knex = require("./knex");

class UserModel extends Base {
    constructor() {
        super();
        this.userTable = 'chattest.user';
        this.userInfoTable = 'chattest.user_info';
        this.friendRequestTable = 'chattest.friendrequest'
    }

    // 定义参数默认值为 student 表
    update(account, params) {
        return knex(this.userTable).where('account', '=', account).update(params);
    }

    // 登录
    selectByAccount(account) {
        return knex(this.userTable).where('account', '=', account).select();
    }

    // 注册账号
    userRegistration (data) {
        return knex(this.userTable).insert({
            "account":data.account,
            "password":data.password,
            "create_time":data.create_time
        });
    }
    // 注册添加个人信息
    userRegistrationInfo(data){
        return knex(this.userInfoTable).insert({
            "account":data.account,
            "nickname":data.nickname,
            "phone":data.phone,
            "email":data.email,
            "profile":data.profile,
            "signature":data.signature
        })
    }

    // 按照账户查询
    searchByAccount(account) {
        return knex(this.userInfoTable).where('account', '=', account).select();
    }

    // 按照昵称查询,同一昵称可能有多个账户
    searchByNickname(nickname) {
        return knex(this.userInfoTable).where('nickname', '=', nickname).select();
    }

    // 修改密码
    changePassword(account,newPd){
        return knex(this.userTable).where('account','=',account).update({password:newPd});
    }

    // 好友申请
    friendRequest(data){
        return knex(this.friendRequestTable).insert({
            apply_account:data.apply_account,
            target_account:data.target_account,
            apply_group:data.apply_group,
            message:data.message,
            state:data.state
        })
    }

    // 批量查询用户信息
    batchSearchUser(data){
        return knex(this.userInfoTable).whereIn('account',data).select();
    }
}

module.exports = new UserModel();
