var express = require('express');
var router = express.Router();

const shopController = require("./shopcontroller");
const shopcreateItemMiddleware = [
    shopController.createItem
];
router.post('/createItem', shopcreateItemMiddleware)
const shopgetAllMiddleware = [
    shopController.getAll
];
router.get('/getAll', shopgetAllMiddleware)

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