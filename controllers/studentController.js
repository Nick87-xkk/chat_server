// 引用用户模版数据
const StudentController = require('../models/studentModel.js');
const {param} = require("express/lib/router");

const studentController = {
    // showStudent 获取用户数据并返回到页面
    showStudent: async function (req, res, next) {
        try {
            let studentData = await StudentController.all()
            res.json({
                code: 200,
                message: "success",
                data: studentData
            })
        } catch (e) {
            res.json({code: 0, message: "error", data: e})
        }
    },
    // addStudent
    addStudent: async (req, res) => {
        try {
            let addFlag = await StudentController.insert(req.query);
            res.json({
                code: 200,
                message: "success",
                data: Boolean(addFlag)
            })
        } catch (e) {
            res.json({code: 0, message: "error", data: e})
        }
    },
    //
    deleteStudent: async (req, res) => {
        try {
            let deleteFlag = await StudentController.delete(req.query.sid);
            res.json({
                code: 200,
                message: "success",
                data: Boolean(deleteFlag)
            })
        } catch (e) {
            res.json({code: 0, message: "error", data: e})
        }
    },

    updateStudent: async (req, res) => {
        try {
            console.log(res)
            let updateFlag = await StudentController.update(req.query.sid, req.query);
            res.json({
                code: 200,
                message: 'success',
                data: Boolean(updateFlag)
            })
        } catch (e) {
            res.json({code: 0, message: 'error', data: e})
        }
    },

    findStudentById: async (req, res) => {
        try {
            let studentDate = await StudentController.selectById(req.query.sid);
            res.json({
                code: 200,
                message: 'success',
                data: studentDate
            });
        } catch (e) {
            res.json({code: 0, message: 'error', data: e})
        }
    }
}

module.exports = studentController;
