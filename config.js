const configs = {
    mysql: {
      host: '',
      port: '',
      user: '',
      password: '',  // 自己设置的密码
      database: '' // 数据库的名字
    },
    // 打印错误
    log: {
      error (message) {
        console.log('[knex error]', message)
      }
    }
  }
  
  module.exports = configs
