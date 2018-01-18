"use strict";
let http = require("http");
let fs = require("fs");
let server = http.createServer();
server.on('request', function(req, res){
    let path = __dirname + "/bigben.jpg"
    // fs.readFile(path, function(err, data){
    //     if(err) {
    //         console.error(err);
    //         return;
    //     }
    //     res.end(data);
    // })
    const img = fs.createReadStream(path);
    img.pipe(res);
    /*
        Image size is 6.8MB
        Performance by readFile is 3292ms on chrome
        Performance by createReadStream is 3345ms on chrome
    */
});
server.listen(3000);
