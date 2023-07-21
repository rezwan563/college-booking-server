const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

dotenv.config();


app.listen(port, ()=>{
    console.log("server is running");
})