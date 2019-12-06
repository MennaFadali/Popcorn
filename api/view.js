const express = require("express");
const router = express.Router();
router.use(express.json());
const imdb = require("imdb-api");

const MovieNight = require("../models/MovieNight");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
    var ht = `<!DOCTYPE html>
    <html style="box-sizing: border-box">
    <title>Popcorn</title>
    <body class="body" style="margin: 0; padding:0; background-image: url('/images/redwall-wallpaper.jpg'); background-repeat: no-repeat; background-attachment: fixed;">
        <div style="padding-top: 80px;">
            <div class="container" style="float:left; margin: 50px 600px; width: 700px; padding: 0 15px;">`;
    const movienights = await MovieNight.find();
    for(var i=0;i<movienights.length;++i){
        const cur = movienights[i];
        const plot = await functions.getMovieSummary(cur.title);

        ht += `<div class="movie-night">
                  <div style="float:left">
                      <img src="/images/popcorn_emoji.png" href="Popcorn Emoji" height="200px">
                  </div>
                  <h3 style="color: black; margin: 0px; padding-left: 200px; font-family: Geneva, Tahoma, sans-serif; font-size: 40px;">`+cur.title+`</h3>
                  <h3 style="color: white; margin: 0px; padding-left: 200px; font-family: Geneva, Tahoma, sans-serif; font-size: 40px;margin-top: -51px; margin-left: 3px;" >`+cur.title+`</h3>
                  <ul class="temp" style="color: white; padding: 15px; margin: 0; font-family: Geneva, Tahoma, sans-serif; overflow: hidden; list-style: none; -webkit-padding-start: 0;">`;

        ht += "<li> Host Name: "+cur.username+"</li>";
        ht += "<li> Host Number: "+cur.phone_number+"</li>";
        ht += "<li> Location: "+cur.location+"</li>";
        ht += "<li> Time: "+cur.time+"</li>";
        ht += "<br><li> Movie Plot: <p>"+plot+"</p></li></br></ul></div><br>";
    }
    ht+= `<div style="clear: both;"></div></div></div></body></html>`;
    res.send(ht);
  });


// to call: const plot = await functions.getMovieSummary("Tangled");
const functions = {
  getMovieSummary: async title => {
    try {
      var mov = await imdb.get(
        { name: title },
        { apiKey: "feb050e5", timeout: 30000 }
      );
      return mov.plot ? mov.plot : "No info found for this movie";
    } catch (err) {
      return "No info found for this movie";
    }
  }
};

module.exports = router;
