var userService = require('./userservice')

const userlogin = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        console.log(req.body)
        var users = await userService.getuser(req.body)
        return res.status(200).json({ status: 200, data: users, message: "Successfully authenticated user" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const newuser = async function (req, res) {
    // Validate request parameters, queries using express-validator
    try {
        console.log(req.body)
        var users = await userService.createuser(req.body)
        return res.status(200).json({ status: 200, data: users, message: "Successfully registered user" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
module.exports = {
    userlogin,
    newuser
};