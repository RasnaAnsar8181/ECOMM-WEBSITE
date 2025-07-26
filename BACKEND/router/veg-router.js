const express = require('express')
const router = express.Router();
const veg_controller = require("../controller/vegetables")

router.get('/',veg_controller.getAllVegetables)

router.post('/',veg_controller.insertVegetables)

router.put('/:idno',veg_controller.updateVegetables)

router.delete('/:idno',veg_controller.deleteVegetables)

module.exports = router