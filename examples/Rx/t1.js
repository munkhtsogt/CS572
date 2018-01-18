const Rx = require('@reactive/rxjs');

let source = Rx.Observable.interval(100).take(10)
    .map(x => Rx.Observable.of(1, 2, 3))
    .mergeAll();

source.subscribe(x => console.log(x));