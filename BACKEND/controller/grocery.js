const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    idno: Number,
    item: String,
    desc: String,
    price: String,
    image: String,
    qty: Number,
})
const GroceryModel = mongoose.model('groceryitems', dataSchema)

exports.getAllGroceries = async(req,res)=>{
    try {
        const data = await  GroceryModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }   
}

exports.insertGroceries = async(req,res)=>{
    const data = new GroceryModel(req.body)
    try {
        const saveddata = await data.save()
        res.status(201).json(saveddata)
    } catch (error) {
        res.status(500).json(error)
    }
}

// exports.updateGroceries = async (req, res) => {
//     try {
      
//         const data = await GroceryModel.find()
//         Object.assign(data, req.body);  
//         const savedData = await data.save();  
//         res.status(200).json(savedData);
//     } catch (error) {
//         console.error("Error updating groceries:", error);
//         res.status(500).json({ message: "Server error", error });
//     }
// };


exports.updateGroceries = async(req,res)=>{  
    try{
      const data = await GroceryModel.findOneAndReplace(
        {idno:req.params.idno},
         req.body,
        { returnDocument: "after" }
    );  
    res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteGroceries =async(req,res)=>{
    try {
       const data = await GroceryModel.findOneAndDelete({idno:req.params.idno})
       res.status(201).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}