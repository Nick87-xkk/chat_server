#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('helloworld:server');
var http = require('http');
var https = require('https');
var fs = require('fs')
var io = require('../socketio')

//https 证书
const options = {
  key: fs.readFileSync('./key/localhost+2-key.pem'),
  cert: fs.readFileSync('./key/localhost+2.pem')
}
/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '9892');
app.set('port', port);
app.set('host','0.0.0.0');

/**
 * Create HTTP/HTTPS server.
 */
var httpServer = http.createServer(app);
var httpsServer = https.createServer(options,app);
// 启动服务同时，创建socket服务
io.getSocketio(httpsServer)
/**
 * Listen on provided port, on all network interfaces.
 */
httpServer.listen(443,()=>{
  console.log('http 运行在 443端口')
});
httpServer.on('error', onError);
httpServer.on('listening', onListening);
httpsServer.listen(9892,()=>{
  console.log('https 运行在9892端口')
})
httpsServer.on('error', onError);
httpsServer.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = httpServer.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
