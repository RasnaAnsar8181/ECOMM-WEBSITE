const express = require('express')
const router = express.Router();

const cleaning_controller = require("../controller/cleaning")

router.get('/',cleaning_controller.getAllCleaning)

router.post('/',cleaning_controller.insertCleaning)

router.put('/:idno',cleaning_controller.updateCleaning)

router.delete('/:idno',cleaning_controller.deleteCleaning)


module.exports = router