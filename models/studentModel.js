const Base = require('./base');
const knex = require("../models/knex");

class StudentModel extends Base {
    // 定义参数默认值为 student 表
    constructor(props = 'javaee.student') {
        super(props);
    }

    // 重写base类的delete
    delete(id) {
        return knex(this.table).where('sid', '=', id).del();
    }

    update(id, params) {
        return knex(this.table).where('sid', '=', id).update(params);
    }

    selectById(id){
        return knex(this.table).where('sid','=',id).select()
    }
}

module.exports = new StudentModel();
