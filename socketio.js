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
         // console.log('a user connected');
        // console.log(socket.handshake.query);
        // console.log(socket.id);
        // console.log(io.sockets.adapter.rooms);
        // 链接数量
        console.log(io.eio.clientsCount)
        // 向除了自己以外的客户端推送消息
        chatMap.set(socket.handshake.query.account, socket.id);
        // console.log(chatMap);
        // console.log(socket.id,socket.handshake.query.account);
        socket.on('chat message', async (msg) => {
            // console.log(msg);

            // console.log(chatMap.get(msg.receiveAccount.toString()));
            // console.log(chatMap.get(msg.receiveAccount.toString().toString()))
            //  console.log(await studentModel.selectById(1001));
            // 发送给对应用户dd
            socket.to(chatMap.get(msg.receiveAccount.toString().toString())).emit('chat message', JSON.stringify(msg));

            // socket.broadcast.emit('chat message', `${socket.handshake.query.account}: ${msg.data}`);

        });
        socket.on('visitor', (msg) => {
            // console.log(msg)
            socket.broadcast.emit('visitor', msg);
        })
        // 发起视屏
        socket.on('video_call', (msg) => {
            // console.log(msg);
            // 视屏通话请求
            socket.to(chatMap.get(msg.receiveAccount.toString().toString())).emit('video-request', msg.data)
        })
        // rtc 视频 数据处理
        socket.on('ice_candidate',async(msg)=>{
            // console.log(JSON.parse(msg));
            let json = JSON.parse(msg);
            // console.log(chatMap.get(msg.receiveAccount))
            // console.log(chatMap)
            // console.log(json.receiveAccount)
            socket.broadcast.emit('_ice_candidate',msg);
            /*if (json.receiveAccount){
                socket.to(chatMap.get(json.receiveAccount.toString())).emit('_ice_candidate',msg);
            }*/
        })
    });

};

/* 
  用户登录后将用户account和连接时产生的socketid对应放入缓存
  通过account查找当前用户socketid实现点对点聊天
*/

module.exports = socketio;