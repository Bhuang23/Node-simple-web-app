var express = require('express');
var router = express.Router();

const userController = require("./usercontroller");

const userloginMiddleware = [
    userController.userlogin
];
router.post('/login', userloginMiddleware)

const newuserMiddleware = [
    userController.newuser
];
router.post('/newuser', newuserMiddleware)

module.exports = router;