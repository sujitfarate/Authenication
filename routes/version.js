const express=require('express')
const { login } = require('../controllers/login')
const { generateToken } = require('../middleware/token')
const { test } = require('../controllers/test')

const Router=express.Router()
console.log('in version')
Router.route('/login').post(generateToken,login)
Router.route('/test').get(test)

module.exports=Router