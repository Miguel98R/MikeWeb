const express = require('express')
                    const router = express.Router()    
router.get("/", (req, res) => {
                                res.render("index");
                            });
router.get("/inner-page", (req, res) => {
                                res.render("inner-page");
                            });
router.get("/portfolio-details", (req, res) => {
                                res.render("portfolio-details");
                            });
router.get("/index", (req, res) => {
        res.render("index");
     });module.exports = router 
