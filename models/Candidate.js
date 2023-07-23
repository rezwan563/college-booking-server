const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name:{
        type:String,
        min: 3,
        max: 20,
        required: true,
    },
    img:{
        type:String,
        default:"",
        required:true,
    },
    subject:{
        type:String,
        default:"",
        required:true,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },
    address:{
        type:String,
    },
    dob:{
        type:Date,
    }
    
})

module.exports = mongoose.model("Candidate", CandidateSchema)