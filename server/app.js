const express = require('express');
// const mongoose = require('mongoose');
// const db = require('./config/keys').mongoURI;
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const passport = require('passport');
const cors = require('cors');

const app = express();

const UI_API_URL = 'http://localhost:4200';

// Express Configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
const options = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "X-Access-Token", "application/x-www-form-urlencoded", "charset=UTF-8", "application/json", "text/plain", "Access-Control-Allow-Headers"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: UI_API_URL,
    preflightContinue: false
};

app.use(cors(options));

// Middlewares/Services
// app.use(passport.initialize());
// require('./services/passport')(passport);

// API Routes
// require('./routes')(app);

// Connect to MongoDB
// mongoose
//     .connect(db)
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.log(err));

module.exports = app;