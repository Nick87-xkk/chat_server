const socketio = {};
const socket_io = require('socket.io');

// 存储account对应socketid
const chatMap = new Map();

//获取io
socketio.getSocketio = function (server) {
    const io = socket_io(server, {
        cors: true
    });

    io.on('connection', (socket) => {
        // 连接后将用户账号和socketID关联起来存入map中
        chatMap.set(socket.handshake.query.account, socket.id);

        socket.on('chat message', async (msg) => {
            if (chatMap.get(msg.receiveAccount)){
                socket.to(chatMap.get(msg.receiveAccount.toString().toString())).emit('chat message', JSON.stringify(msg));
            }
        });
        // 游客聊天消息处理
        socket.on('visitor', (msg) => {
            // 向除了自己以外的客户端推送消息
            socket.broadcast.emit('visitor', msg);
        })

        // 视屏视屏通话请求消息
        socket.on('video_call', (msg) => {
            let json = JSON.parse(msg)
            socket.to(chatMap.get(json.receive_account).toString()).emit('video request', msg);
        })
        // 视屏通话被拒处理
        socket.on("refuse videoCall",(msg)=>{
            socket.to(chatMap.get(msg.account).toString()).emit('refuse video', {"refuse":1});
        })
        // rtc 视频 数据处理
        socket.on('ice_candidate', (msg)=>{
            let json = JSON.parse(msg);
            socket.to(chatMap.get(json.account)).emit('_ice_candidate',msg);
        })
        // 挂断视屏通话
        socket.on("hangup videoCall",(msg)=>{
            console.log(msg)
            socket.to(chatMap.get(msg.account).toString()).emit('hangup videoCall', {"hangup":1});
        })
    });

};


module.exports = socketio;