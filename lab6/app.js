'use strict';
const express = require('express');
const app = express();
// ROUTE
app.use('/api', require('./routes'));
app.listen(3000, function(){
    console.log('listening on *: 3000');
});