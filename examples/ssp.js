setTimeout(() => { console.log("Timeout"); }, 0);
setImmediate(() => { console.log("Immediate"); });
process.nextTick(() => { console.log("Nexttick"); });