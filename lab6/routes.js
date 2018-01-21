const express = require('express');
const router = express.Router();

const grades = [{id: 1, name: 'Asaad Saad', course: 'CS572', grade: 95},
                {id: 2, name: 'Munkhtsogt Tsogbadrakh', course: 'CS572', grade: 94},
                {id: 3, name: 'Brad Pitt', course: 'CS572', grade: 93},
                {id: 4, name: 'Tom Cruise', course: 'CS572', grade: 92}];
// ACCEPT CROSS DOMAIN XHR REQUEST
router.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// ALL LIST
router.get('/grades', (req, res, next) => {
    res.send(grades);
});
// CREATE
router.post('/grades', (req, res, next) => {
    req.checkBody("name", "Name is required").notEmpty();
    req.checkBody("course", "Course is required").notEmpty();
    req.checkBody("grade", "A valid grade is required").notEmpty().isNumeric();
    var err = req.validationErrors();
    if (err) {
        res.send(err);
        return;
    }
    const grade = {
        id: grades[grades.length - 1].id + 1,
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade,
    };
    grades.push(grade);
    res.send(grade);
});
// READ
router.get('/grades/:id', (req, res, next) => {
    const i = grades.findIndex(grade => grade.id == req.params.id);
    if(i == -1) res.send({ 'message': 'grade not exists' });
    else res.send(grades[i]);
});
// UPDATE
router.put('/grades/:id', (req, res, next) => {
    const i = grades.findIndex(grade => grade.id == req.params.id);
    if(i == -1) res.send({ 'message': 'grade not exists' });
    else {
        req.checkBody("name", "Name is required").notEmpty();
        req.checkBody("course", "Course is required").notEmpty();
        req.checkBody("grade", "A valid grade is required").notEmpty().isNumeric();
        var err = req.validationErrors();
        if (err) {
            res.send(err);
            return;
        }
        grades[i].name = req.body.name;
        grades[i].course = req.body.course;
        grades[i].grade = req.body.grade;
        res.send(grades[i]);
    }
});
// DELETE
router.delete('/grades/:id', (req, res, next) => {
    const i = grades.findIndex(grade => grade.id == req.params.id);
    if(i == -1) res.send({ 'message': 'grade not exists' });
    else {
        grades.splice(i, 1);
        res.send({ 'message': 'successfully deleted' });
    }
});

module.exports = router;