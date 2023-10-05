const json = require('body-parser/lib/types/json')
const express = require('express')
const router = express.Router()


let {
    sendMail
} = require('../controllers/mail.controller')


//OBTENER ACORDES
router.post('/sendMail', sendMail)

module.exports = router
