"use strict";
let dns = require("dns");
dns.resolve4("www.mum.edu", function(err, addresses){
    if(err) {
        console.error(err);
        return;
    }
    let ip = addresses[0];
    console.log(ip);
});