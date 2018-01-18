process.on('message', function(data){
    console.log(data);
    const fs = require('fs');
    const file = fs.createReadStream(__dirname + '/' + data);
    file.on('data', function(data){
        process.send({ status: 'on', data: data.toString('utf-8') });
    });
    file.on('end', function(){
        process.send({ status: 'end', data: null });
    });
})
