let user = require('../models/user')
let item = require('../models/item')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
exports.getuser = async function (data) {
    try {
        console.log(data);
        const userdetail = await user.find({username: data.username, password: data.password});
        console.log(userdetail)
        return userdetail;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.updateuser = async function (data) {
    try {
        console.log(data);
        const userdetail = await user.findOneAndUpdate({_id: data._id}, {
            username: data.username,
            password: data.password,
            email: data.email,
            phonenumber: data.phonenumber,
            address: data.address,
            state: data.state,
            country: data.country,
            zipcode: data.zipcode
        }, {new: true});
        console.log(userdetail)
        return userdetail
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.getallorders = async function (data) {
    try {
        let responses = await user.find({"username": data.username});
        let orders = responses[0].orders
        //console.log(orders)
        return orders
    }
    catch (e) {
    // Log Errors
    throw Error(e)
}
}
exports.getusername = async function (data) {
    try {
        console.log(data);
        const userdetail = await user.find({username: data.username});
        console.log(userdetail)
        return userdetail;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.getemail = async function (data) {
    try {
        console.log(data);
        const userdetail = await user.find({email: data.email});
        console.log(userdetail)
        return userdetail;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

exports.addtocart = async function (data) {
    if(data.response[0] == null) {
        const userdetail = await user.updateOne({ "username": data.username },{"$pull": { "orders": {"item_id": data.item_id}}},{safe: true });
        return "Item out of stock";
    }
    else {
        try {
            let responses = await user.find({"username": data.username});
            let orders = responses[0].orders
            for (let i = 0; i < orders.length; i++) {
                if (data.response[0].item_id === orders[i].item_id) {
                    console.log("found")
                    if(orders[i].quantity+1 <= data.response[0].item_quantity) {
                        const userdetail = await user.updateOne({
                            "username": data.username,
                            "orders.item_id": data.response[0].item_id
                        }, {$set: {"orders.$.quantity": orders[i].quantity + 1}}, {safe: true});
                        return "Updated order successfully";
                    }
                    else
                    {
                        if(orders[i].quantity===data.response[0].item_quantity) {
                            return "Item out of stock";
                        }
                        else
                        {
                            const userdetail = await user.updateOne({
                                "username": data.username,
                                "orders.item_id": data.response[0].item_id
                            }, {$set: {"orders.$.quantity": data.response[0].item_quantity}}, {safe: true});
                            return "Reduced order because item out of stock";
                        }
                    }
                }
            }
            const userdetail = await user.updateOne(
                    {username: data.username},
                    {
                        $push: {
                            orders: {
                                item_id: data.response[0].item_id,
                                item_name: data.response[0].item_name,
                                item_price: data.response[0].item_price,
                                item_category: data.response[0].item_category,
                                item_description: data.response[0].item_description,
                                item_currency: data.response[0].item_currency,
                                item_image: data.response[0].item_image,
                                quantity: 1
                            }
                        }
                    });
            console.log(userdetail)
            return "Added item to order successfully";
        } catch (e) {
                // Log Errors
            throw Error(e)
        }
    }
}

exports.removefromcart = async function (data) {
    console.log("start")
    if(data.response[0]==null) {
        const userdetail = await user.updateOne({ "username": data.username },{"$pull": { "orders": {"item_id": data.item_id}}},{safe: true });
        return "Item out of stock";
    }
    else
    {
        try {
            let responses = await user.find({ "username": data.username});
            let orders = responses[0].orders
            for(let i = 0; i < orders.length;i++)
            {
                if(data.item_id==orders[i].item_id)
                {
                    console.log("found")
                    if(data.response[0].item_quantity < orders[i].quantity-1) {
                        const userdetail = await user.updateOne({ "username": data.username, "orders.item_id": data.item_id},{ $set: { "orders.$.quantity" :data.response[0].item_quantity}},{safe: true });
                        return "Reduced order because item out of stock";
                    }
                    else
                    {
                        if(orders[i].quantity > 1)
                        {
                            console.log("Success")
                            const userdetail = await user.updateOne({ "username": data.username, "orders.item_id": data.item_id},{ $set: { "orders.$.quantity" : orders[i].quantity-1}},{safe: true });
                            return "Order removed successfully";
                        }
                        else {
                            const userdetail = await user.updateOne({ "username": data.username },{"$pull": { "orders": {"item_id": data.item_id}}},{safe: true });
                            return "Order removed successfully";
                        }
                    }
                }
                else {
                }
            }
            const userdetail = await user.updateOne({ "username": data.username },{"$pull": { "orders": {"item_id": data.item_id}}},{safe: true });
            return "Order not found";
        } catch (e) {
            // Log Errors
            throw Error(e)
        }
    }
}


exports.createuser = async function (data) {
    try {
        let checkuser = await user.find({username: data.username});
        let checkemail = await user.find({email: data.email});
        console.log(checkuser)
        //make sure user is unique in database
        if(checkuser.length===0 && checkemail.length===0)
        {
            //make new user
            const newuser = new user({
                username: data.username,
                password: data.password,
                email: data.email,
                phonenumber: data.phonenumber,
                address: data.address,
                state: data.state,
                country: data.country,
                zipcode: data.zipcode
            });
            await newuser.save()
            return newuser;
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


exports.createPayment = async function (data) {
    let responses = await user.find({"username": data.username});
    let orders = responses[0].orders
    const items = await item.find({});
    let error = false;
    //make sure each order is in stock before allowing user to buy it
    for (let i = 0; i < orders.length; i++) {
        let found = false;
        for (let j = 0; j < items.length;j++) {
            if(orders[i].item_id===items[j].item_id)
            {
                found=true;
                if(orders[i].quantity>items[j].item_quantity)
                {
                    //user ordered too many items
                    const userdetail = await user.updateOne({ "username": data.username, "orders.item_id": orders[i].item_id},{ $set: { "orders.$.quantity" :items[j].quantity}},{safe: true });
                    error=true;
                }
                else
                {
                    console.log("user not buying item out of stock")
                }
            }
        }
        if(!found)
        {
            //item doesn't exist
            const userdetail = await user.updateOne({ "username": data.username },{"$pull": { "orders": {"item_id": orders[i].item_id}}},{safe: true });
        }
        else
        {
            console.log("item exists")
        }
    }
    try {
        if (error) {
            return  {
                error: {message:'Cannot order items out of stock'}
            };
        }
        else {
            //console.log(data);
            //deduce quantity of items in stock
            for (let i = 0; i < orders.length; i++) {
                for (let j = 0; j < items.length; j++) {
                    if (orders[i].item_id === items[j].item_id) {
                        console.log("orders: "+orders[i].quantity);
                        console.log("items: "+items[j].item_quantity);
                        if (orders[i].quantity < items[j].item_quantity)
                        {
                            //console.log("reduced: "+items[j].item_id);
                            const userdetail = await item.findOneAndUpdate({item_id: items[j].item_id}, {item_quantity: items[j].item_quantity-orders[i].quantity}, {new: true})
                        }
                        else
                        {
                            //console.log("deleted: "+items[j].item_id);
                            const userdetail = await item.findOneAndRemove({item_id: items[j].item_id});
                        }
                    }
                }
            }
            //clear orders
            for (let i = 0; i < orders.length; i++) {
                const userdetail = await user.updateOne({ "username": data.username },{"$pull": { "orders": {"item_id": orders[i].item_id}}},{safe: true });
            }
            // Create the PaymentIntent
            let intent = await stripe.paymentIntents.create({
                    payment_method: data.result.paymentMethod.id,
                    description: "Test payment",
                    amount: data.amount * 100,
                    currency: 'usd',
                    confirmation_method: 'manual',
                    confirm: true
                });
            //console.log(intent);
            // Send the response to the client
            if(intent.status === 'succeeded') {
                    return ({
                        success: true
                    });
            }
            else {
                return  {error: {message:'Invalid PaymentIntent status'}};
            }
        }
    }
    catch (e) {
        // Display error on client
        return ({error: {message:e.message}});
    }
}