'use strict';
const express = require('express');
const validator = require('express-validator');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
// PARSE application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// PARSE application/json
app.use(bodyParser.json());
// LOGGER
app.use(morgan('combined'));
// VALIDATOR
app.use(validator());
// ROUTE
app.use('/api', require('./routes'));
app.listen(3000, function(){
    console.log('listening on *: 3000');
});