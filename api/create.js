const express = require("express");
const router = express.Router();
router.use(express.json());

const MovieNight = require("../models/MovieNight");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', (req, res) => {

    res.send(`
    <!DOCTYPE html>
<html style="box-sizing: border-box">

<title>Popcorn</title>
<body class="body" style="margin: 0; padding:0; background-color: #ff3333;">
	<div style="padding-top: 80px;">
    <div class="container" style="float:left; margin: 60px 600px; width: 700px; padding: 0 15px;">
            <div style="float:left">
                <img src="/images/popcorn_emoji.png" href="Barwa Logo" height="360px">
            </div>
            <form action="http://localhost:3000/api/create/post" method="POST" style="padding-top: 0; padding-right: 102px; font-family: Geneva, Tahoma, sans-serif; font-size: 14px;">
                <h3 style="padding-left: 365px;">Movie Night Details</h3>
                <input style="width: 180px; height: 20px; padding: 8px;border: solid black; border-width: 0 3px 3px 0;" type="text" placeholder="Host Name" name="username"><br><br>
                <input style="width: 180px; height: 20px; padding: 8px;border: solid black; border-width: 0 3px 3px 0;" type="text" placeholder="Host Number" name="phone_number"><br><br>
                <input style="width: 180px; height: 20px; padding: 8px;border: solid black; border-width: 0 3px 3px 0;" type="text" placeholder="Viewing Venue" name="location"><br><br>
                <input style="width: 180px; height: 20px; padding: 8px;border: solid black; border-width: 0 3px 3px 0;" type="text" placeholder="Viewing Time" name="time"><br><br>
                <input style="width: 180px; height: 20px; padding: 8px;border: solid black; border-width: 0 3px 3px 0;" type="text" placeholder="Movie Name" name="title"><br><br>
                <button type="submit" style="width: 80px; height: 30px; margin-left: 55px; border: solid black; border-width: 0 3px 3px 0; background-color: #ffe040; font-family: Geneva, Tahoma, sans-serif; font-size: 14px;">Host</button>
            </form>
			<div style="clear: both;"></div>
		</div>
	</div>
</body>
</html>
    `);
})

router.post('/post', async (req, res) => {
    // console.log(req);
    const newNight = await MovieNight.create(req.body)
    const movienights = await MovieNight.find()
    console.log(movienights);
    res.send(`<!DOCTYPE html>
    <html style="box-sizing: border-box">
    
    <title>Popcorn</title>
    <body class="body" style="margin: 0; padding:0; background-image: url('/images/filmboard-wallpaper.jpg');">
        <div style="padding-top: 80px;">
        <div class="container" style="float:left; margin: 300px 600px; width: 700px; padding: 0 15px;">
                <div style="float:left">
                    <img src="/images/popcorn_emoji.png" href="Barwa Logo" height="360px">
                </div>
                <h3 style="color: white; margin: 27px; margin-bottom: 15px; padding-left: 365px;font-family: Geneva, Tahoma, sans-serif; font-size: 37px;">Movie Night for ${req.body.title} Created Successfully by ${req.body.username}!</h3>
                <a href="http://localhost:3000/" style="font-weight: bolder; background-color: #ffe040; width: 186px; height: 24px; border: solid black; border-width: 0 3px 3px 0; color: black; padding: 5px 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; margin: 4px 50px; cursor: pointer; font-family: Geneva, Tahoma, sans-serif;">Go Back To Home Page</a>
                <div style="clear: both;"></div>
            </div>
        </div>
    </body>
    </html>
    `);
});

module.exports = router;
