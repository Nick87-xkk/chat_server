// 引用用户模版数据
const StudentController = require('../models/studentModel.js');

const studentController = {
  // showStudent 获取用户数据并返回到页面
  showStudent: async function(req,res,next){
    try{
      let studentData = await StudentController.all()
      res.json({
        code: 200,
        message: "操作成功",
        data: studentData
      })
    }catch(e){
      res.json({ code: 0, message: "操作失败", data: e })
    }
  },
}

module.exports = studentController;
