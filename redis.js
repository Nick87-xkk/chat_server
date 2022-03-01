const redis = require('redis')
const client =  redis.createClient(6397,'49.232.185.124')

client.on('connect',()=>{
    client.set()
    client.get()
    client.lPush()
})