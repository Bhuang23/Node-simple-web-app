let item = require('../models/item')

exports.getAll = async function (data) {
    try {
        console.log(data);
        var items = await item.find({});
        console.log(items)
        return items;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.getCategory = async function (data) {
    try {
        console.log(data);
        var items = await item.find({category:data.category});
        console.log(items)
        return items;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.getName = async function (data) {
    try {
        console.log(data);
        var items = await item.find({name:data.name});
        console.log(items)
        return items;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.shopgetNameandCategory = async function (data) {
    try {
        console.log(data);
        var items = await item.find({category:data.category,name:data.name});
        console.log(items)
        return items;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

