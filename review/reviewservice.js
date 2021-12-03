let review = require('../models/review')
const Mongoose = require("mongoose");
exports.createreview = async function (data) {
    try {
        //make new review
        const newreview = new review({
                item_id: data.item_id,
                item_name: data.item_name,
                username:data.username,
                date:data.date,
                score: data.score,
                feed_back: data.feed_back,
        });
        await newreview.save();
        return newreview;
    }catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.getreviewsbyid = async function (data) {
    try {
        console.log(data);
        const reviews = await review.find({item_id: data.item_id});
        //console.log(items)
        return reviews;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}
exports.deletereview = async function (data) {
    try {
        console.log(data);
        const deletedreview = await review.findByIdAndDelete(data);
        console.log(deletedreview)
        return deletedreview;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}