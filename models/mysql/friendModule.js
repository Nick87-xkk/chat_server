const Base = require('./base');
const knex = require("./knex");

class FriendModule extends Base {
    constructor() {
        super();
        this.friendTable = 'chattest.friend';
        this.friendRequestTable = 'chattest.friendrequest'
    }

    // 建立好友列表 ，仅在用户注册成功后执行
    createFriendInfo(data) {
        return knex(this.friendTable).insert({
            "account": data.account,
            "friend_account": JSON.stringify({"同事": [], "家人": [], "我的好友": []})
        })
    }

    // 更新好友列表信息
    updateFriendInfo(data) {
        return knex(this.friendTable).where({
            "account": data.account
        }).update({
            "friend_account": JSON.stringify(data.friend_account)
        })
    }

    // 查询好友信息
    searchFriendInfo(data) {
        return knex(this.friendTable).where({
            "account": data.account
        }).select()
    }

    // 创建好友请求
    createFriendRequest(data) {
        return knex(this.friendRequestTable).insert({
            "apply_account": data.apply_account,
            "target_account": data.target_account,
            "apply_group": data.apply_group,
            "message": data.message,
            "state": data.state
        })
    }

    // 查询好友请求
    searchFriendRequest(data) {
        return knex(this.friendRequestTable).where({
            "apply_account": data.account
        }).orWhere({
            "target_account": data.account
        }).select()
    }

    // 更新好友请求
    updateFriendRequest(data) {
        return knex(this.friendRequestTable).where({
            "apply_account": data.apply_account,
            "target_account": data.target_account
        }).update({
            "state": data.state
        })
    }
}

module.exports = new FriendModule();