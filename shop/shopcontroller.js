const shopService = require('./shopservice');

const createItem = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        console.log(req.body)
        const item = await shopService.createItem(req.body);
        return res.status(200).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 200, data: item, message: "Successfully created item" });
    } catch (e) {
        return res.status(400).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 400, message: e.message });
    }
}
const getAll = async function (req, res) {
    try {
        console.log(req.body)
        const items = await shopService.getAll();
        return res.status(200).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 200, data: items, message: "Successfully got all items" });
    } catch (e) {
        return res.status(400).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 400, message: e.message });
    }
}
const getCategory = async function (req, res) {
    try {
        console.log(req.body)
        const items = await shopService.getCategory(req.body);
        return res.status(200).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 200, data: items, message: "Successfully got all items" });
    } catch (e) {
        return res.status(400).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 400, message: e.message });
    }
}
const getName = async function (req, res) {
    try {
        console.log(req.body)
        const items = await shopService.getName(req.body);
        return res.status(200).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 200, data: items, message: "Successfully got all items" });
    } catch (e) {
        return res.status(400).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 400, message: e.message });
    }
}
const getId = async function (req, res) {
    try {
        console.log(req.body)
        const items = await shopService.getId(req.body);
        return res.status(200).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 200, data: items, message: "Successfully got item" });
    } catch (e) {
        return res.status(400).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 400, message: e.message });
    }
}
const shopgetNameandCategory = async function (req, res) {
    try {
        console.log(req.body)
        const items = await shopService.shopgetNameandCategory(req.body);
        return res.status(200).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 200, data: items, message: "Successfully got all items" });
    } catch (e) {
        return res.status(400).json({header: {'Access-Control-Allow-Origin':'https://shoppingfirst.netlify.app'},  status: 400, message: e.message });
    }
}
module.exports = {
    createItem,
    getAll,
    getId,
    getCategory,
    getName,
    shopgetNameandCategory
};