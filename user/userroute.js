const express = require('express');
const router = express.Router();

const userController = require("./usercontroller");

const userloginMiddleware = [
    userController.userlogin
];
router.post('/login', userloginMiddleware)

const newuserMiddleware = [
    userController.newuser
];
router.post('/newuser', newuserMiddleware)

const getuserMiddleware = [
    userController.getusername
];
router.post('/getuser', getuserMiddleware)
const getemailMiddleware = [
    userController.getemail
];
router.post('/getemail', getemailMiddleware)

const updateuserMiddleware = [
    userController.updateuser
];
router.post('/updateuser', updateuserMiddleware)

const addtocartMiddleware = [
    userController.addtocart
];
router.post('/addtocart', addtocartMiddleware)
const removefromcartMiddleware = [
    userController.removefromcart
];
router.post('/removefromcart', removefromcartMiddleware)
const getallordersMiddleware = [
    userController.getallorders
];
router.post('/getallorders', getallordersMiddleware)
const createPaymentMiddleware = [
    userController.createPayment
];
router.post('/createPayment', createPaymentMiddleware)
module.exports = router;