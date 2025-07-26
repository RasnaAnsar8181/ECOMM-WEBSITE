const express = require('express')
const router = express.Router();
const contact_controller = require("../controller/contact")

router.get('/',contact_controller.getAllContacts)

router.post('/',contact_controller.insertContacts)

module.exports = router