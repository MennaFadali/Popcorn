const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const MovieNightSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    phone_number: {
        type: String, //check length
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    time: {
        type: String,//can change to time
        required: true
    }
    
   
})

module.exports = MovieNight = mongoose.model('movienight', MovieNightSchema)