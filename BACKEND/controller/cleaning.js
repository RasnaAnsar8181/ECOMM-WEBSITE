const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    idno: Number,
    item: String,
    desc: String,
    price: String,
    image: String,
    qty: Number,
})


const cleaningModel =  mongoose.model('cleaningitems',dataSchema)

exports.getAllCleaning = async(req,res)=>{
    try {
        const data = await  cleaningModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }   
}

exports.insertCleaning = async(req,res)=>{
    const data = new cleaningModel(req.body)
    try {
        const saveddata = await data.save()
        res.status(201).json(saveddata)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateCleaning = async(req,res)=>{  
    try{
      const data = await cleaningModel.findOneAndReplace(
        {idno:req.params.idno},
         req.body,
        { returnDocument: "after" }
    );  
    res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteCleaning =async(req,res)=>{
    try {
       await cleaningModel.findOneAndDelete({idno:req.params.idno})
       res.status(201).json(res.data)
    } catch (error) {
        res.status(500).json(error)
    }
}