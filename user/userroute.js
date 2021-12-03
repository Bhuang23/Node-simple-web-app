const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
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
router.post('/getuser', auth, getuserMiddleware)
const getemailMiddleware = [
    userController.getemail
];
router.post('/getemail', auth,getemailMiddleware)

const updateuserMiddleware = [
    userController.updateuser
];
router.post('/updateuser', auth,updateuserMiddleware)

const addtocartMiddleware = [
    userController.addtocart
];
router.post('/addtocart', auth,addtocartMiddleware)
const removefromcartMiddleware = [
    userController.removefromcart
];
router.post('/removefromcart', auth,removefromcartMiddleware)
const removeallfromcartMiddleware = [
    userController.removeallfromcart
];
router.post('/removeallfromcart', auth,removeallfromcartMiddleware)
const getallordersMiddleware = [
    userController.getallorders
];
router.post('/getallorders', auth,getallordersMiddleware)
const createPaymentMiddleware = [
    userController.createPayment
];
router.post('/createPayment', auth,createPaymentMiddleware)
module.exports = router;