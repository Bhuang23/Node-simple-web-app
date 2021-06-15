let item = require('../models/item')

exports.createItem = async function (data) {
    try {
        //make new user
        let checkitem = await item.find({item_id: data.item_id});
        console.log(checkitem)
        //make sure user and email are unique in database
        if(checkitem.length===0) {
            const newitem = new item({
                item_id: data.item_id, item_name: data.item_name, item_price: data.item_price,
                item_category: data.item_category,  item_description: data.item_description,
                item_currency:data.item_currency,
                item_image: data.item_image, quantity: data.quantity
            });
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
        //console.log(data);
        const items = await item.find({});
        //console.log(items)
        return items;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.getCategory = async function (data) {
    try {
        console.log(data);
        const items = await item.find({item_category: data.item_category});
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
        const items = await item.find({item_name:  new RegExp(data.item_name, "i")});
        console.log(items)
        return items;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.getId = async function (data) {
    try {
        console.log(data);
        const items = await item.find({item_id:data.item_id});
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
        const items = await item.find({item_category: data.item_category, item_name: new RegExp(data.item_name, "i")});
        console.log(items)
        return items;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

