const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');
const bikeRoutes = require('./routes/bikes.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', bikeRoutes);

module.exports = app;