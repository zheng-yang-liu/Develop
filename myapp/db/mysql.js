// 引入mysql
var mysql = require('mysql')

// 链接数据库
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql6zy13172',
  database: 'vuedata',
})
// 更换同步操作
var sqlQuery = function (sql,values) { 
  return new Promise(function (resolve, reject) { 
    connection.query(sql,values, function (error, result, filed) {
      if (error == null) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  })
}
  

module.exports = sqlQuery
