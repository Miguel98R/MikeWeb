const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/home", (req, res) => {
    res.render("home");
});

router.get("/email_success", (req, res) => {
    res.render("email_success");
});

router.get("/email_error", (req, res) => {
    res.render("email_error");
});


module.exports = router 

