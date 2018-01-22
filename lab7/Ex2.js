const express = require('express');
const mongo = require('mongoskin');
const crypto = require('crypto');
const app = express();
const db = mongo.MongoClient.connect('mongodb://localhost:27017/cs572', {native_parser: true});
app.get('/secret', (req, res) => {
    db.collection('homework7').findOne({}, (err, item)=>{
        if(err){
            console.error(err);
            return;
        }
        db.close();
        const cipher = crypto.createDecipher('aes256', 'asaadsaad');
        let decrypted = cipher.update(item.message, 'hex', 'utf8');
        decrypted += cipher.final('utf8');
        res.end(decrypted);
    });
});

app.listen(3000, function(){
    console.log('listening on *: 3000');
});