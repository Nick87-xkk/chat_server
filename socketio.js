
  var socketio = {};
  var socket_io = require('socket.io');

  //获取io
  socketio.getSocketio = function(server){
    var io = socket_io(server,{cors:true});

    io.on('connection', (socket)=>{
        // console.log('a user connected');
        // console.log(socket.handshake.query);
        // console.log(socket.id);
        console.log(io.sockets.adapter.rooms);
        // 向除了自己以外的客户端推送消息
         socket.on('chat message',(msg)=>{
            console.log(msg);
              socket.broadcast.emit('chat message',`${socket.handshake.query.user}: ${msg}`);
          });
      });

  };

  module.exports = socketio;
