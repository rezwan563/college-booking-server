const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const collegeRouter = require('./routes/colleges')
const candidateRouter = require('./routes/candidates')
const reviewRouter = require('./routes/reviews')

const port = process.env.PORT || 5000;

dotenv.config();
const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(()=>console.log("connected to mongodb"))


// middleware
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/college_services/colleges', collegeRouter)
app.use('/college_services/candidates', candidateRouter)
app.use('/college_services/candidates', candidateRouter)

app.listen(port, ()=>{
    console.log("server is running");
})