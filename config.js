const configs = {
    /* mysql: {
      host: '49.232.185.124',
      port: '3306',
      user: 'javaee',
      password: '12138',  // 自己设置的密码
      database: 'javaee' // 数据库的名字
    }, */
    mysql: {
      host: '49.232.185.124',
      port: '3306',
      user: 'nick87',
      password: '666666',  // 自己设置的密码
      database: 'chattest' // 数据库的名字
    },
    // 打印错误
    log: {
      error (message) {
        console.log('[knex error]', message)
      }
    }
  }
  
  module.exports = configs
