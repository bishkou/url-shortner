const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url')

const app = express();


//enable cors
app.use(cors());

// change the db


var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, OPTIONS');
    next();
  })
  .use('/url', urlRoutes)



module.exports = app;

// app.listen(3000);




