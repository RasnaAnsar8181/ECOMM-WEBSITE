const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    idno: Number,
    item: String,
    desc: String,
    price: String,
    image: String,
    qty: Number,
})

const VegetablesModel = mongoose.model('vegetablesitems', dataSchema)

exports.getAllVegetables = async(req,res)=>{
    try {
        const data = await  VegetablesModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }   
}

exports.insertVegetables = async(req,res)=>{
    const data = new VegetablesModel(req.body)
    try {
        const saveddata = await data.save()
        res.status(201).json(saveddata)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateVegetables = async(req,res)=>{  
    try{
      const data = await VegetablesModel.findOneAndReplace(
        {idno:req.params.idno},
         req.body,
        { returnDocument: "after" }
    );  
    res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteVegetables =async(req,res)=>{
    try {
       await VegetablesModel.findOneAndDelete({idno:req.params.idno})
       res.status(201).json(res.data)
    } catch (error) {
        res.status(500).json(error)
    }
}