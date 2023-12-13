
const express = require('express')

app = express()
app.use(express.json())

//cors
const cors = require('cors')
const jwt  = require('jsonwebtoken')
JWT_KEY    = "MERN"

//Middleware
app.use(cors())
app.use(express.urlencoded({extended:false}))

//bodyparser
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

//mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/PackingSlipGenerator',{
    useNewUrlParser   :true,
    useUnifiedTopology:true,
})
.then(()=>app.listen(5000,()=>console.log("success")))
.catch((err) => console.log(err,"mongoose"));

require('./models/model.js')
 const PackingDatalst = mongoose.model("PackingList")


 //create method
app.post("/api/create", async(req,res)=>{
    
    try{
        const added= await new PackingDatalst( req.body )
        added.save()
        res.status(200).json(added);
    }
    catch(err){
        res.send({status:err})
    }
})