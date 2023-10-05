const express = require('express')
const router = express.Router()

router.use('/mail', require('./mail.routes'))


module.exports = router