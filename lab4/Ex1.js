const Rx = require('@reactivex/rxjs');
const subject = new Rx.Subject();
const http = require('http');
const URL = require('url');
const cp = require('child_process');

function parseURL(e){
    const url = URL.parse(e.req.url, true);
    const query = url['query'];
    if(Object.keys(query).length != 0){
        const fname = query['url'];
        const p = cp.fork('child_process.js');
        p.send(fname);
        p.on('message', function(data){
            if(data.status == 'end') e.res.end();
            else {
                e.res.write(data.data);
            }
        });
    }
    else {
    	e.res.end('http://localhost:4000?url=file.txt');
    }
}

subject.subscribe(parseURL);

http.createServer((req, res) => {
    // http://localhost:4000?url=file.txt
    subject.next({ req: req, res: res })
}).listen(4000);
