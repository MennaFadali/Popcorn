const express = require('express')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const app = express()
app.use(express.json())


const create = require('./api/create')

const view = require('./api/view')

const db = require('./config/keys').mongoURI
mongoose
.connect(db,{useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.get('/', (req, res) => {

    res.send(`<h1>Welcome to Popcorn</h1>
    <a href="/api/view">View Created Movie Nights</a>
    </br>
    <a href="/api/create">Host a Movie Night</a>
    `);
  
});

app.use('/api/create', create)
app.use('/api/view', view)

app.use((req, res) => {

    res.status(404).send({ err: "We can not find what you are looking for" });
  
});

app.listen(3000, () => console.log(`Server on ${3000}`))
