const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    idno: Number,
    item: String,
    desc: String,
    price: String,
    image: String,
    qty: Number,
})

const KitchenModel = mongoose.model('kitchenitems', dataSchema)

exports.getAllKitchen = async(req,res)=>{
    try {
        const data = await  KitchenModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }   
}

exports.insertKitchen = async(req,res)=>{
    const data = new KitchenModel(req.body)
    try {
        const saveddata = await data.save()
        res.status(201).json(saveddata)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateKitchen = async(req,res)=>{  
    try{
      const data = await KitchenModel.findOneAndReplace(
        {idno:req.params.idno},
         req.body,
        { returnDocument: "after" }
    );  
    res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteKitchen =async(req,res)=>{
    try {
       await KitchenModel.findOneAndDelete({idno:req.params.idno})
       res.status(201).json(res.data)
    } catch (error) {
        res.status(500).json(error)
    }
}