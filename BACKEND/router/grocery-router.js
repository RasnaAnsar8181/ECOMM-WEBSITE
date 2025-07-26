const express = require('express')
const router = express.Router();
const grocery_controller = require("../controller/grocery")


router.get('/',grocery_controller.getAllGroceries)

router.post('/',grocery_controller.insertGroceries)

router.put('/:idno',grocery_controller.updateGroceries)

router.delete('/:idno',grocery_controller.deleteGroceries)

module.exports = router