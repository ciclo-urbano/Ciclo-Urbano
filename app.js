const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');
const bikeRoutes = require('./routes/bikes');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', bikeRoutes);
app.use('/api', userRoutes);

module.exports = app;