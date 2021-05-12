var mongoose = require('mongoose')

const itemSchema  = new mongoose.Schema({
    id: {type: mongoose.ObjectId, required: true},
    name: {type: String,required: true},
    price:{type: Number,required: true},
    category:{type: String,required: true}
})


module.exports = mongoose.model('item', itemSchema);