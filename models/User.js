const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
    }
    
})