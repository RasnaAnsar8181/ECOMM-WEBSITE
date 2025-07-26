const express = require('express')
const router = express.Router();
const dairy_controller = require("../controller/dairy")

router.get('/',dairy_controller.getAllDairy)

router.post('/',dairy_controller.insertDairy)

router.put('/:idno',dairy_controller.updateDairy)

router.delete('/:idno',dairy_controller.deleteDiary)

module.exports = router