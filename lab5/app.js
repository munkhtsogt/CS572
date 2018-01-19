const Rx = require('@reactivex/rxjs');
// const subject = new Rx.Subject();
const express = require('express');
const fetch = require('node-fetch');
const engine = require('consolidate');
const app = express();
// SETTINGS
app.set('views', __dirname + '/views');
app.engine('html', engine.swig);
app.set('view engine', 'html');
app.set('trust proxy', false);
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);
app.enable('view cache');
// HOME
app.get('/', (req, res) => {
    res.render('index');
});
// USERS
app.get('/users', (req, res) => {
    let url = 'http://jsonplaceholder.typicode.com/users/';
    /* PROMISE */
    // fetch(url).then(function(data) {
    //     return data.json();
    // }).then(function(users) {
    //     res.render('users', { users: users });
    // });

    /* OBSERVABLE */
    // Rx.Observable.from(fetch(url).then(data => data.json()).then(users => {
    //     res.render('users', { users: users });
    // }));
    
    /* ASYNC/WAIT */
    const fetcher = async url => {
        try {
            const response = await fetch(url);
            const users = await response.json();
            res.render('users', { users: users });
        }
        catch(err) {
            console.error(err);
            return;
        }
    };
    fetcher(url);
});
// START APP
app.listen(3000);