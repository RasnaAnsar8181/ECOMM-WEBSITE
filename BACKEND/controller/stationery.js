const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    idno: Number,
    item: String,
    desc: String,
    price: String,
    image: String,
    qty: Number,
})

const StationeryModel = mongoose.model('stationeryitems', dataSchema)

exports.getAllStationery = async(req,res)=>{
    try {
        const data = await  StationeryModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }   
}

exports.insertStationery = async(req,res)=>{
    const data = new StationeryModel(req.body)
    try {
        const saveddata = await data.save()
        res.status(201).json(saveddata)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateStationery = async(req,res)=>{  
    try{
      const data = await StationeryModel.findOneAndReplace(
        {idno:req.params.idno},
         req.body,
        { returnDocument: "after" }
    );  
    res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteStationery =async(req,res)=>{
    try {
       await StationeryModel.findOneAndDelete({idno:req.params.idno})
       res.status(201).json(res.data)
    } catch (error) {
        res.status(500).json(error)
    }
}