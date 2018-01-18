var buffer = new Buffer('Hello world!');
var targetBuffer = new Buffer(10);
var targetStart = 0, 
	sourceStart = 4, 
	sourceEnd = 11;
buffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd);
console.log(targetBuffer.toString());
