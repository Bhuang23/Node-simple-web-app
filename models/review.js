const mongoose = require('mongoose');

const reviewSchema  = new mongoose.Schema({
    item_id: {type: Number, required: true},
    item_name: {type: String,required: true},
    username:{type: String,required: true},
    date:[{type: Date,required: true}],
    score: {type: Number,required: true},
    feed_back: {type: String,required: true},
})


module.exports = mongoose.model('review', reviewSchema);