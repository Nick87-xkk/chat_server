"use strict";

var socketio = {};

var socket_io = require('socket.io'); // 存储account对应socketid


var chatMap = new Map(); //获取io

socketio.getSocketio = function (server) {
  var io = socket_io(server, {
    cors: true
  });
  io.on('connection', function (socket) {
    /* console.log('a user connected');
    console.log(socket.handshake.query);
    console.log(socket.id); */
    // console.log(io.sockets.adapter.rooms);
    // 向除了自己以外的客户端推送消息
    chatMap.set(socket.handshake.query.account, socket.id);
    console.log(chatMap); // console.log(socket.id,socket.handshake.query.account);

    socket.on('chat message', function _callee(msg) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // console.log(msg.receiveAccount);
              // console.log(chatMap.get(msg.receiveAccount.toString())); 
              //  console.log(await studentModel.selectById(1001)); 
              // 发送给对应用户
              socket.to(chatMap.get(msg.receiveAccount.toString().toString())).emit('chat message', "".concat(socket.handshake.query.account, ": ").concat(msg.data)); // socket.broadcast.emit('chat message', `${socket.handshake.query.account}: ${msg}`);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    socket.on('video message', function (msg) {
      console.log(msg);
      socket.emit('video message', msg.data);
    });
  });
};
/* 
  用户登录后将用户account和连接时产生的socketid对应放入缓存
  通过account查找当前用户socketid实现点对点聊天
*/


module.exports = socketio;