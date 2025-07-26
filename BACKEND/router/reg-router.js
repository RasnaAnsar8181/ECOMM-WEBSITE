// const express = require('express')
// const router = express.Router();
// const reg_controller = require("../controller/registration");


// router.get('/login',reg_controller.getAllRecords)
// router.post('/signup',reg_controller.insertRecords)

// module.exports = router

const express = require('express')
const user_controller = require('../controller/registration')
const router = express.Router()

router.get('/login',user_controller.getrecords)
router.post('/signup',user_controller.postrecords)
router.patch('/login',user_controller.updaterecords)
router.put('/login/:id',user_controller.updaterecordsByid)
router.delete('/login/:id',user_controller.deleterecords)

module.exports = router