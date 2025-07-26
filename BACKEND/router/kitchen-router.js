const express = require('express')
const router = express.Router();
const kitchen_controller = require("../controller/kitchen")

router.get('/',kitchen_controller.getAllKitchen)

router.post('/',kitchen_controller.insertKitchen)

router.put('/:idno',kitchen_controller.updateKitchen)

router.delete('/:idno',kitchen_controller.deleteKitchen)


module.exports = router