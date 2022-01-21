
  var socketio = {};  
  var socket_io = require('socket.io');  

  //获取io  
  socketio.getSocketio = function(server){  
    var io = socket_io(server);  

    io.on('connection', (socket)=>{
        console.log('a user connected');
        console.log(`${socket.id}
         ${socket.handshake.query.user}`
        );
      });
      
      
    //   io.on('connection', function(socket){
    //       console.log('a user connected');
    //       socket.on('disconnect', function(){
    //           console.log('------------user disconnected-------------');
    //       //   io.emit('chat message','user disconnected');
    //       });
    //     });
      
      
      io.on('connection', function(socket){
          socket.on('chat message', function(msg){
            console.log('message: ' + msg);
          });
        });
      
      io.on('connection',(socket)=>{
          socket.on('chat message',(msg)=>{
              io.emit('chat message',`${socket.handshake.query.user}: ${msg}`);
          });
      });


  };  

  module.exports = socketio;  
