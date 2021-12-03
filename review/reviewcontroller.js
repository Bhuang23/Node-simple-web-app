const reviewService = require('./reviewservice');

const createreview = async function (req, res) {
    // Validate request parameters, queries using express-validator
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        console.log(req.body)
        const item = await reviewService.createreview(req.body);
        return res.status(200).json({ status: 200, data: item, message: "Successfully created review" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const getreviewsbyid = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        console.log(req.body)
        const items = await reviewService.getreviewsbyid(req.body);
        return res.status(200).json({ status: 200, data: items, message: "Successfully got all reviews by id" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const deletereview = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://shoppingfirst.netlify.app');
    try {
        console.log(req.body)
        const items = await reviewService.deletereview(req.body);
        return res.status(200).json({ status: 200, data: items, message: "Successfully deleted review" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = {
    createreview,
    getreviewsbyid,
    deletereview,
};