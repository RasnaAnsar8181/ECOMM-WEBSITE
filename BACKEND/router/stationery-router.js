const express = require('express')
const router = express.Router();
const stationery_controller = require("../controller/stationery")

router.get('/',stationery_controller.getAllStationery)

router.post('/',stationery_controller.insertStationery)

router.put('/:idno',stationery_controller.updateStationery)

router.delete('/:idno',stationery_controller.deleteStationery)


module.exports = router