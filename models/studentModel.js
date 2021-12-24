const Base = require('./base');
const knex = require("../models/knex");

class StudentModel extends Base {
  // 定义参数默认值为 user 表
  constructor(props = 'javaee.student'){
    super(props);
  }
  delete(id) {
    return knex(this.table).where('sid', '=', id).del();
  }
}

module.exports = new StudentModel();
