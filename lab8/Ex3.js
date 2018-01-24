'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(validator());
app.use('/api', require('./routes'));
app.listen(3000, function(){
    /* 
        API EXAMPLES
        http://localhost:3000/api/locations
        http://localhost:3000/api/locations/5a6808ab64a9d313fcbd2bfd
        http://localhost:3000/api/nearest?lng=-91.9694841&lat=41.017769&category=food&name=Burger%20King
    */ 
    console.log('listening on *: 3000');
});