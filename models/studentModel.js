const Base = require('./base');

class StudentModel extends Base {
  // 定义参数默认值为 user 表
  constructor(props = 'javaee.student'){
    super(props);
  }
}

module.exports = new StudentModel();
