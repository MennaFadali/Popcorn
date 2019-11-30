const express = require('express');
const router = express.Router();
router.use(express.json());


const MovieNight = require('../models/MovieNight')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); 


router.get('/', (req, res) => {

    res.send(`
    <form action="http://localhost:3000/api/create/post" method="POST">
        Host Name: <input type="text" name="username"><br>
        Host Number: <input type="text" name="phone_number"><br>
        Viewing Venue: <input type="text" name="location"><br>
        Viewing Time: <input type="text" name="time"><br>
        Movie Name: <input type="text" name="title"><br>
        <button type="submit">Create</button>
    </form>
    `);
})

router.post('/post', async (req, res) => {
    // console.log(req);
    const newNight = await MovieNight.create(req.body)
    const movienights = await MovieNight.find()
    console.log(movienights);
    res.send(`<h1>Movie Night Created Successfully!</h1><br>
    <h2>Movie Title: ${req.body.title}</h2><br>
    `);

  });


module.exports = router