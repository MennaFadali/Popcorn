const express = require('express');
const router = express.Router();
router.use(express.json());


const MovieNight = require('../models/MovieNight')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); 
//router.use(bodyParser.urlencoded({ extended: true })); 


router.get('/', async (req, res) => {
    const movienights = await MovieNight.find();
    var mnights = movienights.map(mn => ( 
        `<html><div><h1>Host Name: ${mn.username}</h1></div></html>`
            //"Host Name: "+ mn.username 
        ));
    res.send(mnights);
})


module.exports = router