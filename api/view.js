const express = require("express");
const router = express.Router();
router.use(express.json());
const imdb = require("imdb-api");

const MovieNight = require("../models/MovieNight");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

// to call: const plot = await functions.getMovieSummary("Tangled");
const functions = {
  getMovieSummary: async title => {
    try {
      console.log("enter");
      var mov = await imdb.get(
        { name: title },
        { apiKey: "feb050e5", timeout: 30000 }
      );
      console.log(mov);
      return mov.plot ? mov.plot : "No info found for this movie";
      // console.log(mov);
    } catch (err) {
      return "No info found for this movie";
    }
  }
};

module.exports = router;
