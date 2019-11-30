const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    phone_number: {
        type: string, //check length
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
    
   
})

module.exports = User = mongoose.model('users', UserSchema)