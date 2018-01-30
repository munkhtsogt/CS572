var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', (req, res)=>{
    fs.createReadStream(__dirname + "/text.txt").pipe(res);
}).listen(3000, function(){
    console.log('Server started on 3000');
});