const mongoose = require('mongoose');
const userSchema  = new mongoose.Schema({
    username: {type: String,required: true},
    password:{type: String,required: true},
    email:{type: String,required: true},
    phonenumber: {type: Number,required: true},
    address: {type: String,required: true},
    state: {type: String,required: false},
    country: {type: String,required: true},
    zipcode: {type: String, required: true},
    orders: [{
        item_id: Number,
        item_name: String,
        item_price: Number,
        item_category: String,
        item_description: String,
        item_currency: String,
        item_image: String
    }]
})


module.exports = mongoose.model('user', userSchema);