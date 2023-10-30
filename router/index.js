const express = require('express')
const sendMail = require('../controller/mailController')

const router = express.Router()

router.post('/send-email', sendMail)

module.exports = router 