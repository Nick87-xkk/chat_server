"use strict";

var UserController = require('../models/userModule.js');

var _require = require("express/lib/router"),
    param = _require.param;

var userController = {
  // 验证登录
  verificationUser: function verificationUser(req, res) {
    var userPw;
    return regeneratorRuntime.async(function verificationUser$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(UserController.selectByAccount(88888888));

          case 3:
            userPw = _context.sent;
            console.log(userPw);
            res.json({
              code: 200,
              message: 'success',
              data: userPw
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.json({
              code: 0,
              message: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  },
  // 用户注册
  userRegistration: function userRegistration(req, res) {
    return regeneratorRuntime.async(function userRegistration$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              console.log(req);
              res.json({
                code: 200,
                message: 'success'
              });
            } catch (error) {
              res.json({
                code: 0,
                message: error
              });
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  // 修改密码
  changePassword: function changePassword(req, res) {
    return regeneratorRuntime.async(function changePassword$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              console.log(req);
              res.json({
                code: 200,
                message: 'success'
              });
            } catch (error) {
              res.json({
                code: 0,
                message: error
              });
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
module.exports = userController;