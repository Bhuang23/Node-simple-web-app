const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const reviewController = require("./reviewcontroller");
const reviewcreatereviewMiddleware = [
    reviewController.createreview
];
router.post('/createreview', auth, reviewcreatereviewMiddleware)
const reviewgetreviewsbyidMiddleware = [
    reviewController.getreviewsbyid
];
router.post('/getreviewsbyid', reviewgetreviewsbyidMiddleware)

const reviewdeletereviewMiddleware = [
    reviewController.deletereview
];
router.post('/deletereview', auth, reviewdeletereviewMiddleware)


module.exports = router;