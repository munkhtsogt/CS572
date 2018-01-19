'use strict';
/*
let myValue = '';
const setValue = (text) => {
	myValue = text;
	console.log(myValue);
};
const checkAuth = cb => {
	setValue('Checking Auth...');
	setTimeout(() => { cb(true); }, 2000);
};
const fetchUser = cb => {
	setValue('Fetching User...');
	setTimeout(() => { cb({ name: 'Asaad' }); }, 2000);
};
require('http').createServer().on('request', () => {
	checkAuth(auth => {
		if(auth) fetchUser(user => { setValue(user.name); });
	});
}).listen(3000);
*/
const Rx = require('@reactivex/rxjs');
const subject = new Rx.Subject();

subject.subscribe(() => {
	Rx.Observable.create(ob => {
		ob.next('Checking Auth...');
		setTimeout(() => ob.next('Fetching User...'), 2000);
		setTimeout(() => ob.next('Asaad'), 2000);
	}).subscribe(v => console.log(v));
});

require('http').createServer().on('request', () => {
	subject.next();
}).listen(3000);
