var fs = require("fs");

console.log(__dirname + '/text.txt');
fs.readFile(__dirname + '/text.txt', function read(err, data) {
    console.log(data.toString());
    setTimeout(() => { console.log("Timeout"); }, 0);
    setImmediate(() => { console.log("Immediate"); });
    process.nextTick(() => { console.log("Nexttick"); });
});