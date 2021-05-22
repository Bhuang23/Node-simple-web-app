var mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    username: {type: String,required: true},
    password:{type: String,required: true},
    email:{type: String,required: true},
    phonenumber: {type: Number,required: true},
    address: {type: String,required: true},
    state: {type: String,required: false},
    country: {type: String,required: true},
    zipcode: {type: String, required: true}
})


module.exports = mongoose.model('user', userSchema);