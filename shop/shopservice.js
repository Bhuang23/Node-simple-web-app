let item = require('../models/item')

exports.createItem = async function (data) {
    try {
        //make new user
        let checkitem = await item.find({item_id: data.item_id});
        console.log(checkitem)
        //make sure user and email are unique in database
        if(checkitem.length===0) {
            var newitem = new item({
                item_id: data.item_id, item_name: data.item_name, item_price: data.item_price,
                item_category: data.item_category
            })
            await newitem.save()
            return newitem;
        }
        else{
            //return nothing
            return [];
        }
    }catch (e) {
        // Log Errors
        throw Error(e)
    }
}
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
        var items = await item.find({item_category:data.item_category});
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
        var items = await item.find({item_name:data.item_name});
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
        var items = await item.find({item_category:data.item_category,item_name:data.item_name});
        console.log(items)
        return items;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

