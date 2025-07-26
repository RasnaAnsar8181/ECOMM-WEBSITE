const mongoose = require('mongoose')
const cl = require('cli-color')

const connectDB = async()=>{
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/Customers')
        console.log(cl.white.bgMagenta("============================"))
        console.log(cl.white.bgMagenta("DB is connected successfully"))
        console.log(cl.white.bgMagenta("============================"))
    } catch (error) {
        console.log("DB error",error)
    }
}

module.exports = connectDB;