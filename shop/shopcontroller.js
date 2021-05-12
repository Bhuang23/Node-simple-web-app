var shopService = require('./shopservice')

const getAll = async function (req, res) {
    try {
        console.log(req.body)
        var items = await shopService.getAll(req.body)
        return res.status(200).json({ status: 200, data: items, message: "Successfully got all items" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const getCategory = async function (req, res) {
    try {
        console.log(req.body)
        var items = await shopService.getCategory(req.body)
        return res.status(200).json({ status: 200, data: items, message: "Successfully got all items" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const getName = async function (req, res) {
    try {
        console.log(req.body)
        var items = await shopService.getName(req.body)
        return res.status(200).json({ status: 200, data: items, message: "Successfully got all items" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const shopgetNameandCategory = async function (req, res) {
    try {
        console.log(req.body)
        var items = await shopService.shopgetNameandCategory(req.body)
        return res.status(200).json({ status: 200, data: items, message: "Successfully got all items" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
module.exports = {
    getAll,
    getCategory,
    getName,
    shopgetNameandCategory
};