const express = require('express')
const cl = require('cli-color')
const cors = require('cors')
const connectDB = require('./config/db')
connectDB()
const app = express()

app.use(express.json())
app.use(cors())



const reg_router = require('./router/reg-router')
const contact_router = require('./router/contact-router')
const grocery_router = require('./router/grocery-router')
const kitchen_router = require('./router/kitchen-router')
const stationery_router = require('./router/stationery-router')
const veg_router = require('./router/veg-router')
const cleaning_router = require('./router/cleaning-router')
const dairy_router = require('./router/dairy-router')
const cart_router = require('./router/cart-router')



app.use('/reg',reg_router)
app.use('/contact',contact_router)
app.use('/grocery',grocery_router)
app.use('/kitchen',kitchen_router)
app.use('/stationery',stationery_router)
app.use('/veg',veg_router)
app.use('/cleaning',cleaning_router)
app.use('/dairy',dairy_router)
app.use('/cart',cart_router)

port = 8080
app.listen(port,()=>{
    console.log('')
    console.log(cl.white.bgMagenta("==================================="))
    console.log(cl.white.bgMagenta("Server is running in the port ",port))
    console.log(cl.white.bgMagenta("==================================="))
    console.log('')
})