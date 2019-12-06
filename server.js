const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const MongoClient = require('mongodb').MongoClient;
const app = express()
app.use(express.json())

app.use(express.static(__dirname+'/public')); //new

const create = require('./api/create')
const view = require('./api/view')

// Connect to mongo
dotenv.config();
const db = process.env.mongoURI
mongoose
.connect(db,{useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.get('/', (req, res) => {

    res.send(`<!DOCTYPE html>
    <html style="box-sizing: border-box">
    
    <title>Popcorn</title>
    <body class="body" style="margin: 0; padding:0; background-image: url('/images/filmboard-wallpaper.jpg');">
        <div style="padding-top: 80px;">
            <div class="container" style="float:left; margin: 300px 600px; width: 700px; padding: 0 15px;">
                <div style="float:left">
                    <img src="/images/popcorn_emoji.png" href="Barwa Logo" height="360px">
                </div>
                <h3 style="color: black; margin: 0px; margin-bottom: 15px; padding-left: 365px;font-family: Geneva, Tahoma, sans-serif; font-size: 40px;">Welcome to Popcorn</h3>
                <h3 style="color: white; margin: 0px; margin-bottom: 15px; padding-left: 365px;font-family: Geneva, Tahoma, sans-serif; font-size: 40px;margin-top: -110px; margin-left: 4px;" >Welcome to Popcorn</h3>
                <ul class="temp" style="padding: 15px; margin: 0; overflow: hidden; list-style: none; -webkit-padding-start: 0;">
                    <li class="bkmrk-item" style="padding: 0; overflow: hidden; width: 260px;">
                        <div style="float:left">
                            <a href="#"><img alt="img1" src="/images/curtain_resized.png"></a>
                        </div>
                        <div class = "bkmrktitle" style="float:right; background-color: white; padding: 15px; width: 133px; height: 52px; padding-top: 30px; margin-bottom: 24px; text-align: left;">
                            <a href="/api/create" style="text-decoration: none; color: black; font-family: Geneva, Tahoma, sans-serif; font-weight: bolder; vertical-align: middle;">HOST <br>MOVIE NIGHT</a>						
                        </div>
                    </li>
                    <li class="bkmrk-item" style="padding: 0; overflow: hidden; width: 260px;">
                        <div style="float:left">
                            <a href="#"><img alt="img2" src="/images/curtain_resized.png"></a>
                        </div>
                        <div class = "bkmrktitle" style="float:right; background-color: #fff; padding: 15px; width: 133px; height: 52px; padding-top: 30px; margin-bottom: 24px; text-align: left;">
                            <a href="/api/view" style="text-decoration: none; color: black; font-family: Geneva, Tahoma, sans-serif; font-weight: bolder; vertical-align: middle;">JOIN <br>MOVIE NIGHT</a>						
                        </div>
                    </li>
                </ul>	
                <div style="clear: both;"></div>
            </div>
        </div>
    </body>
    </html>
    `);
  
});

app.use('/api/create', create)
app.use('/api/view', view)

app.use((req, res) => {

    res.status(404).send({ err: "We can not find what you are looking for" });
  
});

app.listen(3000, () => console.log(`Server on ${3000}`))
