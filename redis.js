const {createClient} = require("redis");
// redis 4.0 以上写法
(async () => {
    const client = createClient({
        // url: 'redis://username:password@ip:port/db_number'
        url: 'redis://:666666@49.232.185.124:6379/0'
    });

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    // list操作 lRange(key,起始,结束)
    const value = await client.lRange('sendMessage', 0, -1) // 得到value 没有则为null
    console.log(value)
})();