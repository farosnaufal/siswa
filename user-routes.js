
const userController = require('../controllers/user-controller')
const express = require('express')
const router = express. Router()

router.get('/', userController.getAllStudent)

module.exports = router
