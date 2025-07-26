const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    idno: Number,
    group:String,
    item: String,
    desc: String,
    price: String,
    image: String,
    qty: Number,
    total:Number
})
const cartModel = mongoose.model('carts', dataSchema)

exports.getCart = async(req,res)=>{
    try {
        const data = await  cartModel.find()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }   
}

exports.insertCart = async(req,res)=>{
    const data = new cartModel(req.body)
    try {
        const saveddata = await data.save()
        res.status(201).json(saveddata)
    } catch (error) {
        res.status(500).json(error)
    }
}

// exports.updateGroceries = async (req, res) => {
//     try {
      
//         const data = await GroceryModel.findById(req.params.idno);
//         Object.assign(data, req.body);  
//         const savedData = await data.save();  
//         res.status(200).json(savedData);
//     } catch (error) {
//         console.error("Error updating groceries:", error);
//         res.status(500).json({ message: "Server error", error });
//     }
// };


exports.updateCart = async(req,res)=>{  
    try{
      const data = await cartModel.findOneAndReplace(
        {idno:req.params.idno},
         req.body,
        { returnDocument: "after" }
    );  
    res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteCart =async(req,res)=>{
    try {
       const data = await cartModel.findOneAndDelete({idno:req.params.idno})
       res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}