const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cl = require('cli-color')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Register',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log(cl.black.bgYellow("App successfully connected")))
.catch((error)=>console.log(error))

const dataSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    cpassword:String,
    gender:String,
    country:String,
    isAgree:String
})

const dataModel = mongoose.model('datadetails',dataSchema)

app.get('/data',async(req,res)=>{
    try {
        const result = await dataModel.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})
app.get('/data',async(req,res)=>{
    try {
        const data = req.body    
        const result = await dataModel.findOne({email:data.email,password:data.password})
        if(!result){
            res.send("incorrect EmailId or password")
        }else{
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})
app.post('/data',async(req,res)=>{
    try {
        const result = new dataModel(req.body)
        const savedData = await result.save()
        res.status(200).json(savedData)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(3000,()=>{
    console.log("------------------------------")
    console.log(cl.black.bgYellow("Server is running on port 3000"))
    console.log("--------------------------")
})