const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url')
const helmet = require("helmet");


const app = express();


//enable cors
app.use(cors());
app.enable('trust proxy');
app.use(helmet());

// change the db
mongoose.connect('mongodb+srv://fb:fb@fb-mern.pgwy7.mongodb.net/fb?retryWrites=true&w=majority\n')
  .then(() => {
    console.log('everything in place');
  })
  .catch(() => {
    console.log('connection failed');
  });

var distDir = process.cwd() +"/dist/";
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




