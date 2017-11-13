const express = require('express')
const router  = express.Router()
const usersController = require('../controller/users-controller.js')



router.get('/users', usersController.findAll)






module.exports = router
