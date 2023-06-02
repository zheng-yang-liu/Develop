var express = require('express')
var router = express.Router()
//引入MySQL
var connection = require('../db/mysql')
/* GET users listing. */
router.get('/', function (req, res, next) {
  // 编写sql语句
  var sql = 'select * from user'
  // 执行MySQL语句
  connection.query(sql, function (error, result) {
    if (error == null) {
      res.json({ code: 200, msg: '获取成功', data: result })
    } else {
      res.json(error)
    }
  })
})

module.exports = router
