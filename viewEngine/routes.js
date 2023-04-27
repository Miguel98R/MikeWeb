const express = require('express')
const router = express.Router()
router.get("/", (req, res) => {
    res.render('index', {
        title: 'MikeWeb | Home ',
        name: 'José Miguel Rosas'
    })
})
router.get("/inner-page", (req, res) => {
    res.render("inner-page", {
        title: 'MikeWeb | Home ',
        name: 'José Miguel Rosas'
    })
})
router.get("/portfolio-details", (req, res) => {
    res.render("portfolio-details", {
        title: 'MikeWeb | Home ',
        name: 'José Miguel Rosas'
    })
})
router.get("/index", (req, res) => {
    res.render('index', {
        title: 'MikeWeb | Home ',
        name: 'José Miguel Rosas'
    })
});
module.exports = router
