var express = require('express');
var router = express.Router();

const shopController = require("./shopcontroller");

const shopgetAllMiddleware = [
    shopController.getAll
];
router.post('/getAll', shopgetAllMiddleware)

const shopgetCategoryMiddleware = [
    shopController.getCategory
];
router.post('/getCategory', shopgetCategoryMiddleware)

const shopgetNameMiddleware = [
    shopController.getName
];
router.post('/getName', shopgetNameMiddleware)

const shopgetNameandCategoryMiddleware = [
    shopController.shopgetNameandCategory
];
router.post('/getCategoryName', shopgetNameandCategoryMiddleware)

module.exports = router;