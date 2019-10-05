const mongoose = require('mongoose');

const MarketSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    name : String,
    image : String,
    adress : {
        country : String,
        postalCode: String,
        state: String,
        city: String,
        street : String,
    },
    active : Boolean,
})

module.exports = mongoose.model('Market',MarketSchema);