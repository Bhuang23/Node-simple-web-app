
let user = require('../models/user')

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
            email: data.password,
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

exports.addtocart = async function (data) {
    try {
        console.log(data.response);
        const userdetail = await user.updateOne(
            { username: data.username },
            { $push: { orders: data.response }}
        );
        console.log(userdetail)
        return userdetail;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

exports.removefromcart = async function (data) {
    try {
        const userdetail = await user.updateOne({ "username": data.username },{"$pull": { "orders": {"item_id": data.response[0].item_id}}},{safe: true });
        console.log(userdetail)
        return userdetail;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}


exports.createuser = async function (data) {
    try {
        let checkuser = await user.find({username: data.username});
        console.log(checkuser)
        //make sure user is unique in database
        if(checkuser.length===0)
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

