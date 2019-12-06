const express = require("express");
const router = express.Router();
router.use(express.json());
const imdb = require("imdb-api");

const MovieNight = require("../models/MovieNight");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
    var ht = "<div><h1>Created Movie Nights</h1>";
    const movienights = await MovieNight.find();
    for(var i=0;i<movienights.length;++i){
        const cur = movienights[i];
        const plot = await functions.getMovieSummary(cur.title);
        ht += "<h3> Title: "+cur.title+"</h3>";
        ht += "<h3> Host Name: "+cur.username+"</h3>";
        ht += "<h3> Host Number: "+cur.phone_number+"</h3>";
        ht += "<h3> Location: "+cur.location+"</h3>";
        ht += "<h3> Time: "+cur.time+"</h3>";
        ht += "<p>"+plot+"</p></br>";
    }
    ht+= "</div>";
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
