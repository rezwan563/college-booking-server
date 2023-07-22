const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

dotenv.config();
const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(()=>console.log("connected to mongodb"))


// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.listen(port, ()=>{
    console.log("server is running");
})