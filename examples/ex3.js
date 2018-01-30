var test = function(){
    return new Promise(function(resolve, reject){
        if(true){
            resolve("This is true");
        } else {
            reject("This is false");
        }
    });
}

test().then(data => {console.log(data); return data; }).then(d => console.log(d)).catch(err => console.log(err))