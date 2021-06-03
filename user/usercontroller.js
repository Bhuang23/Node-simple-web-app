const userService = require('./userservice');

const userlogin = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        console.log(req.body)
        const users = await userService.getuser(req.body);
        return res.status(200).json({ status: 200, data: users, message: "Successfully authenticated user" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const newuser = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        console.log(req.body)
        const users = await userService.createuser(req.body);
        return res.status(200).json({ status: 200, data: users, message: "Successfully registered user" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const getusername = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        console.log(req.body)
        const user = await userService.getusername(req.body);
        return res.status(200).json({ status: 200, data: user, message: "Successfully got user" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const updateuser = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        console.log(req.body)
        const user = await userService.updateuser(req.body);
        return res.status(200).json({ status: 200, data: user, message: "Successfully updated user" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const addtocart = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        console.log(req.body)
        const user = await userService.addtocart(req.body);
        return res.status(200).json({ status: 200, data: user, message: "Successfully added item to cart" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const removefromcart = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        console.log(req.body)
        const user = await userService.removefromcart(req.body);
        return res.status(200).json({ status: 200, data: user, message: "Successfully removed item to cart" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = {
    userlogin,
    newuser,
    getusername,
    updateuser,
    addtocart,
    removefromcart
};