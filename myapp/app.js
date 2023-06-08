var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var register = require('./routes/register')
var login = require('./routes/login')
var selectLink = require('./routes/selectLink')
var selectContent = require('./routes/selectContent')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/register', register)
app.use('/login', login)
app.use('/selectLink', selectLink)
app.use('/selectContent', selectContent)

module.exports = app
