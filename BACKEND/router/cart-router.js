const express = require('express')
const router = express.Router();

const cart_controller = require("../controller/cart")

router.get('/',cart_controller.getCart)

router.post('/',cart_controller.insertCart)

router.put('/:idno',cart_controller.updateCart)

router.delete('/:idno',cart_controller.deleteCart)


module.exports = router