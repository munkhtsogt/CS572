const app = require('./module');
console.log(app.b);

let buf = new Buffer("Hello", "utf-8");

console.log(buf.slice(0, 4));