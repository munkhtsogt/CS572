const express = require('express');
const app = express();
app.set('jsonp callback name', 'cb');
app.get('/hello', function(req, res){ 
    res.jsonp({ name: 'Mogi', course: 'MWA' });
}).listen(3000);