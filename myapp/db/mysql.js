// 引入mysql
var mysql = require('mysql')

// 链接数据库
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql6zy13172',
  database: 'vuedata',
})
module.exports = connection;
