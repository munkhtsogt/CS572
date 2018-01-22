var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/cs572", { native_parser: true });

db.collection('users').findOne({}, (err, item) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(item);
    db.close();
});