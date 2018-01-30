const Rx = require('@reactivex/rxjs');

let source = Rx.Observable.interval(100).take(10)
    .map(x => Rx.Observable.of(1, 2, 3))
    .mergeAll();

// let source = Rx.Observable.interval(100).take(10)
//     .flatMap(x => Rx.Observable.of(1, 2, 3));

source.subscribe(x => console.log(x));