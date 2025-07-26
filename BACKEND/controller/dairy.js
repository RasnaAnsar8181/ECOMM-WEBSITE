const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    idno: Number,
    item: String,
    desc: String,
    price: String,
    image: String,
    qty: Number,
})

const DairyModel = mongoose.model('dairyitems', dataSchema)

exports.getAllDairy = async(req,res)=>{
    try {
        const data = await  DairyModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }   
}

exports.insertDairy = async(req,res)=>{
    const data = new DairyModel(req.body)
    try {
        const saveddata = await data.save()
        res.status(201).json(saveddata)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateDairy = async(req,res)=>{  
    try{
      const data = await DairyModel.findOneAndReplace(
        {idno:req.params.idno},
         req.body,
        { returnDocument: "after" }
    );  
    res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteDiary =async(req,res)=>{
    try {
       await DairyModel.findOneAndDelete({idno:req.params.idno})
       res.status(201).json(res.data)
    } catch (error) {
        res.status(500).json(error)
    }
}