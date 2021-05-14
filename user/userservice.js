let user = require('../models/user')

exports.getuser = async function (data) {
    try {
        console.log(data);
        var userdetail = await user.find({username: data.username, password: data.password});
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
        let checkemail = await user.find({email: data.email});
        console.log(checkemail)
        //make sure user and email are unique in database
        if(checkuser.length===0 && checkemail.length===0)
        {
            //make new user
            var newuser = new user({username: data.username, password: data.password, email: data.email})
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

