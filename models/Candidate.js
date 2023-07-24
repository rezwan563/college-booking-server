const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name:{
        type:String,
        min: 3,
        max: 20,
        default:''
    },
    img:{
        type:String,
        default:"",
    },
    subject:{
        type:String,
        default:"",
    },
    email:{
        type:String,
        required:true,
        default:""
    },
    phone:{
        type:Number,
        default: "",
    },
    address:{
        type:String,
        default:""
    },
    dob:{
        type:Date,
        default:"",
    },
    review:{
        type:String,
        default:"",
    }
    
},{timestamps:true})

module.exports = mongoose.model("Candidate", CandidateSchema)