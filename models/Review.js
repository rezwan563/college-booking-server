const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    candId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        max: 500,
    },
})

module.exports = mongoose.model("Review", ReviewSchema)