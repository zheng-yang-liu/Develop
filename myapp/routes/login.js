var express = require('express')
var router = express.Router()
var md5 = require('md5-node')
//引入MySQL
var sqlQuery = require('../db/mysql')


/* GET users listing. */
router.post('/login', async function (req, res, next) {
  // !接收数据
  var data = req.body
  //   res.json(data)
  //验证数据
  //验证手机
  if (data.phone == '') {
    return res.json({ code: 100, msg: '请输入手机号', data: null })
  }
  if (/^1\d{10}$/.test(data.phone) == false) {
    return res.json({ code: 100, msg: '请输入正确的手机号', data: null })
  }
  if (data.password == '') {
    return res.json({ code: 100, msg: '请输入密码', data: null })
  }

  //selectPhone 根据手机号进行查询
  var selectPhone = 'select * from user where phone = ? and status != 3'
  var userData = await sqlQuery(selectPhone, [data.phone])
  // 如果长度为0 code：100 请注册
  if (userData.length == 0) {
    return res.json({ code: 100, msg: '手机号未注册 请注册', data: null })
  } else {
    var userInfo = userData[0]
    if (userInfo.status == 2) {
      return res.json({ code: 100, msg: '当前账号禁止登录', data: null })
    }
    //加密参数中的password
    var password = md5(data.password)
    //加密拿到的昵称和输入的密码验证token是否相同，如果相同提示登录成功
    var tokenData = md5(userInfo.nickname + password)
    if (tokenData == userInfo.token) {
      return res.json({ code: 200, msg: '登录成功', data: userInfo })
    } else {
      return res.json({
        code: 100,
        msg: '账号和密码错误 请重新输入',
        data: null,
      })
    }
  }

  //   return res.json(userData)
})
module.exports = router
