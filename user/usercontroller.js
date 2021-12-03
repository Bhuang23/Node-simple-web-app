const userService = require('./userservice');
const userlogin = async function (req, res) {
    // Validate request parameters, queries using express-validator
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        console.log(req.body)
        const users = await userService.getuser(req.body);
        if(users.username) {
            return res.status(200).json({status: 200, data: users, message: "Successfully authenticated user"});
        }
        else
        {
            return res.status(400).json({ status: 400, data: [], message: "Username or password is invalid" });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, data: [], message: e.message });
    }
}

const newuser = async function (req, res) {
    // Validate request parameters, queries using express-validator
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        console.log(req.body)
        const users = await userService.createuser(req.body);
        console.log(users)
        if(users.username){
            return res.status(200).json({ status: 200, data: users, message: "Successfully registered user" });
        }
        else
        {
            return res.status(400).json({ status: 400, data: [], message: "Username or email already taken" });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const getusername = async function (req, res) {
    // Validate request parameters, queries using express-validator
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        console.log(req.body)
        const user = await userService.getusername(req.body);
        return res.status(200).json({ status: 200, data: user, message: "Successfully got user" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const getemail = async function (req, res) {
    // Validate request parameters, queries using express-validator
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        console.log(req.body)
        const user = await userService.getemail(req.body);
        return res.status(200).json({ status: 200, data: user, message: "Successfully got user" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const updateuser = async function (req, res) {
    // Validate request parameters, queries using express-validator
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        console.log(req.body)
        const user = await userService.updateuser(req.body);
        return res.status(200).json({ status: 200, data: user, message: "Successfully updated user" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const getallorders = async function (req, res) {
    // Validate request parameters, queries using express-validator
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        //console.log(req.body)
        const user = await userService.getallorders(req.body);
        return res.status(200).json({ status: 200, data: user, message: "Successfully got orders" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const addtocart = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        //console.log(req.body)
        const user = await userService.addtocart(req.body);
        return res.status(200).json({ status: 200, data: [], message: user });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const removefromcart = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        //console.log(req.body)
        const user = await userService.removefromcart(req.body);
        return res.status(200).json({ status: 200, data: [], message: user });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const removeallfromcart = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        //console.log(req.body)
        const user = await userService.removeallfromcart(req.body);
        return res.status(200).json({ status: 200, data:[], message: user });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const createPayment = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        //console.log(req.body)
        const payment = await userService.createPayment(req.body);
        return res.status(200).json({ status: 200, data: payment, message: "successfully connected to stripe" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
module.exports = {
    createPayment,
    userlogin,
    newuser,
    getusername,
    getemail,
    updateuser,
    addtocart,
    removefromcart,
    removeallfromcart,
    getallorders
};