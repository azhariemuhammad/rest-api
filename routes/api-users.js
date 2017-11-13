const express = require('express')
const router  = express.Router()
const usersController = require('../controller/users-controller.js')
const signSignoutController = require('../controller/signin-signout-controller.js')
const verify = require('../middleware/verify')



//method signin
router.post('/signin', signSignoutController.signin)

//method signup
router.post('/signup', signSignoutController.signup)

//method findAll users ==== admin only
router.get('/users', verify.isLogin, verify.isAdmin, usersController.findAll)

//method create a new user ==== admin only
router.post('/users', verify.isLogin, verify.isAdmin, usersController.create)

//method find user by id === open access
router.get('/users/:id', verify.isLogin, verify.isOwner, usersController.findById)

//method put to edit user by id === open access
router.put('/users/:id', verify.isLogin, verify.isOwner, usersController.update)

//method delete by ID === admin only
router.delete('/users/:id', verify.isLogin, verify.isAdmin, usersController.destroy)




module.exports = router
