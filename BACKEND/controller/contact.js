
const mongoose = require('mongoose')

const dataSchemass = new mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const itemModel = mongoose.model('contact', dataSchemass)

exports.getAllContacts = async(req,res)=>{
    try {
        const data = await itemModel.find()
        res.json(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.insertContacts = async(req,res)=>{
    const newdata = new itemModel(req.body)
    try {
        const saveddata = await newdata.save()
        res.status(200).json(saveddata)
    } catch (error) {
        res.status(500).json(error)
    }
}

