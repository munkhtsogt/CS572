const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const router = express.Router();
const app = express();
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
app.use(validator());
const grades = [{id: 1, name: 'Asaad Saad', course: 'CS572', grade: 95},
                {id: 2, name: 'Munkhtsogt Tsogbadrakh', course: 'CS572', grade: 94},
                {id: 3, name: 'Brad Pitt', course: 'CS572', grade: 93},
                {id: 4, name: 'Tom Cruise', course: 'CS572', grade: 92}];
// CREATE
router.post('/grades', (req, res) => {
    req.checkBody("name", "Name is required").notEmpty();
    req.checkBody("course", "Course is required").notEmpty();
    req.checkBody("grade", "A valid grade is required").notEmpty().isNumeric();
    const grade = {
        id: grades[grades.length - 1].id + 1,
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade,
    };
    grades.push(grade);
    res.send(JSON.stringify(grade));
});
// READ
router.get('/grades/:id', (req, res) => {
    const i = grades.findIndex(grade => grade.id == req.params.id);
    if(i == -1) res.send('Grade not exist');
    res.send(JSON.stringify(grades[i]));
});
// UPDATE
router.put('/grades/:id', (req, res) => {
    req.checkBody("name", "Name is required").notEmpty();
    req.checkBody("course", "Course is required").notEmpty();
    req.checkBody("grade", "A valid grade is required").notEmpty().isNumeric();
    const i = grades.findIndex(grade => grade.id == req.params.id);
    if(i == -1) res.send('Grade not exist');
    grades[i].name = req.body.name;
    grades[i].course = req.body.course;
    grades[i].grade = req.body.grade;
    res.send(JSON.stringify(grades[i]));
});
// DELETE
router.delete('/grades/:id', (req, res) => {
    const i = grades.findIndex(grade => grade.id == req.params.id);
    if(i == -1) res.send('Grade not exist');
    grades.splice(i, 1);
    res.status(200).send('SUCCESSFULLY DELETED');
});
// ALL LIST
router.get('/grades', (req, res) => {
    res.send(JSON.stringify(grades));
});

module.exports = router;