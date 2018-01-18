"use strict";
let cluster = require('cluster');
let os = require('os');
let http = require('http');
let server = http.createServer();
server.on('request', (req, res) => {
    for(let i = 0; i < os.cpus.length; i++){
        cluster.fork();
    }
}).listen(3000);
