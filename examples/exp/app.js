const express = require('express');
const si = require('serve-index');
const app = express();
app.set('jsonp callback name', 'cb');
// middleware
app.use('/node_modules', si('node_modules', { 'icons': true }));
app.get('/hello', function(req, res){ 
    res.jsonp({ name: 'Mogi', course: 'MWA' });
}).listen(3000);