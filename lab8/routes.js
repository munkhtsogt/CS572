const express = require('express');
const mongo = require('mongoskin');
const router = express.Router();
const db = mongo.db('mongodb://localhost:27017/cs572', {native_parser: true});
let ObjectId = require('mongodb').ObjectID;
// LIST
router.get('/locations', (req, res, next) => {
    db.collection('homework8').find().toArray((err, results) => {
        if(err) throw err;
        res.send(results);
        return db.close();
    });
});
// CREATE
router.post('/locations', (req, res, next) => {
    req.checkBody("name", "Name is required").notEmpty();
    req.checkBody("category", "Category is required").notEmpty();
    req.checkBody("longitude", "A valid longitude is required").notEmpty().isFloat();
    req.checkBody("latitude", "A valid longitude is required").notEmpty().isFloat();
    if (req.validationErrors()) {
        res.send(req.validationErrors());
        return;
    }
    let location = {
        name: req.body.name,
        category: req.body.category,
        location: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
    };
    db.collection('homework8').insert(location, (err, item) => {
        if(err) throw err;
        // INDEXING
        db.collection('homework8').createIndex({'location': '2d'});
        res.send(item);
        return db.close();
    });
});
// READ
router.get('/locations/:id', (req, res, next) => {
    let query = {"_id": new ObjectId(req.params.id)};
    db.collection('homework8').findOne(query, (err, item)=>{
        if(err) throw err;
        res.send(item);
        return db.close();
    });
});
// UPDATE
router.put('/locations/:id', (req, res, next) => {
    req.checkBody("name", "Name is required").notEmpty();
    req.checkBody("category", "Category is required").notEmpty();
    req.checkBody("longitude", "A valid longitude is required").notEmpty().isFloat();
    req.checkBody("latitude", "A valid longitude is required").notEmpty().isFloat();
    if (req.validationErrors()) {
        res.send(req.validationErrors());
        return;
    }
    let query = {"_id": new ObjectId(req.params.id)};
    let sort = [];
    let operator = {
        name: req.body.name,
        category: req.body.category,
        location: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
    };
    let options = {'new': true};
    db.collection('homework8').findAndModify(query, sort, operator, options, (err, item) => {
        if(err) throw err;
        // INDEXING
        db.collection('homework8').createIndex({'location': '2d'});
        res.send(item);
        return db.close();
    });
});
// DELETE
router.delete('/locations/:id', (req, res, next) => {
    let query = {"_id": new ObjectId(req.params.id)};
    db.collection('homework8').remove(query, (err, item)=>{
        if(err) throw err;
        res.send({message: 'successfully deleted'});
        return db.close();
    });
});
// FIND
router.get('/nearest', (req, res, next) => {
    // http://localhost:3000/api/nearest?lng=-91.9694841&lat=41.017769&category=food&name=Burger%20King
    let name = req.query.name;
    let category = (req.query.category) ? req.query.category.toLowerCase() : '';
    let lng = (req.query.lng) ? parseFloat(req.query.lng) : -91.9694841;
    let lat = (req.query.lat) ? parseFloat(req.query.lat) : 41.017769;
    const query = {
        'category': {'$regex': new RegExp('.*' + category  + '.*', 'i')},
        'location': {'$near': [lng, lat]}  
    };
    if(name) query.name = {'$regex': new RegExp('.*' + name.toLowerCase()  + '.*', 'i')}
    db.collection('homework8').find(query).limit(3).toArray((err, results) => {
        if(err) throw err;
        res.send(results);
    });
});
module.exports = router;