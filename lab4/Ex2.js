'use strict';
const Rx = require('@reactivex/rxjs');
const os = require('os');
let cpus = os.cpus().length, mem = os.totalmem()/1e9;

// Normal
function checkSystem(){
    console.log('Checking your system...');
    if(mem < 4) console.log('This app needs at least 4GB of RAM');
    if(cpus < 2) console.log('Processor is not supported');
    if(cpus >= 2 && mem >= 4) console.log('System is checked successfully.');
}
checkSystem();

// Observable
Rx.Observable.create(ob => {
    ob.next('Checking your system...');
    if(mem < 4) ob.next('This app needs at least 4GB of RAM');
    if(cpus < 2) ob.next('Processor is not supported');
    if(cpus >= 2 && mem >= 4) ob.next('System is checked successfully.');
}).subscribe(v => console.log(v)).unsubscribe();
