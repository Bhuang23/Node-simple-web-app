const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const shopController = require("./shopcontroller");
const shopcreateItemMiddleware = [
    shopController.createItem
];
router.post('/createItem', auth, shopcreateItemMiddleware)
const shopgetAllMiddleware = [
    shopController.getAll
];
router.get('/getAll', shopgetAllMiddleware)

const shopgetCategoryMiddleware = [
    shopController.getCategory
];
router.post('/getCategory', auth, shopgetCategoryMiddleware)

const shopgetNameMiddleware = [
    shopController.getName
];
router.post('/getName', auth, shopgetNameMiddleware)
const shopgetIdMiddleware = [
    shopController.getId
];
router.post('/getId', shopgetIdMiddleware)

const shopgetNameandCategoryMiddleware = [
    shopController.shopgetNameandCategory
];
router.post('/getCategoryName', auth, shopgetNameandCategoryMiddleware)


module.exports = router;