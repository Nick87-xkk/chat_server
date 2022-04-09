const redis = require('redis')
const url = require("../models/redis/redis.config");
const client = redis.createClient({
    url: url
})
const friendController = {
    selectUserFriend: async (req, res) => {
        await client.zrangebyscore(
            `friend`, //key
            0, // min value
            50, // max value
            (err, data) => {
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
    }
}

module.exports = friendController;
