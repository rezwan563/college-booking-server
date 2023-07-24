const mongoose = require('mongoose')

const CollegeSchema = new mongoose.Schema({
name:{
    type:String,
    indexedDB:true,
    required:true,
    unique:true,
},
img:{
    type:String,
    default:"",
    required:true,
},
rating:{
    type:Number,
    required:true,
},
established:{
    type:Number,
    
},
students:{
    type:Number,
},
ad:{
    type:Date,
    required:true,
},
events:{
    type:Array,
    default:[],
},
process:{
    type:String,
    required:true,
},
sports:{
    type:Array,
    defaul:[],
    required:true,
},
research:{
    type:Array,
    default:[],
    required:true
},
history:{
    type:String,
}


},
{timestamps: true}
)

module.exports = mongoose.model("College", CollegeSchema)