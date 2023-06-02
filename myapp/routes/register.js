var express = require('express')
var router = express.Router()
var md5 = require('md5-node')
//引入MySQL
var connection = require('../db/mysql')
/* GET users listing. */
router.post('/', function (req, res, next) {
  // 接收参数Content-Type:application/x-www-form-urlencoded
  var data = req.body
  // 验证参数
    // 验证昵称
  if (data.nickname == '') {
      res.json({ code: 100, msg: '请输入昵称', data: null });
    }
    // 验证手机
    if (data.phone == '') {
      res.json({ code: 100, msg: '请输入手机号', data: null })
    }
    if (/^1\d{10}$/.test(data.phone) == false) { 
        res.json({ code: 100, msg: '请输入正确的手机号', data: null })
    }
    if (data.password == '') {
      res.json({ code: 100, msg: '请输入密码', data: null })
    }
  // 密码加密
    var password = md5(data.password)

  // 插入数据 insert into
    var insertIntoSql = 'insert into user(nickname,phone,password) values(?,?,?)';
    connection.query(
      insertIntoSql,
      [data.nickname, data.phone,password],
        function (error, result, filed) {
            if (error == null) {
              res.json({code:200,message:'注册成功',data:null})
            } else {
                res.json({ code:100,message:'注册失败 请重试',data:error })
          }
      }
    )
})

module.exports = router
