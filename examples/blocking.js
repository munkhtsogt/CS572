console.log("start");
var open = false;
setTimeout(function(){
    open = true;
}, 1000);

while(!open){ console.log("wait..."); }

console.log("opened!");