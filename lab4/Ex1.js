const Rx = require('@reactivex/rxjs');
const subject = new Rx.Subject();
const http = require('http');
const URL = require('url');
const cp = require('child_process');

function parseURL(e){
    const url = URL.parse(e.req.url);
    const query = url['query'];
    if(query){
        const fname = query.substring(4, query.length);
        const p = cp.fork('child_process.js');
        p.send(fname);
        p.on('message', function(data){
            if(data.status == 'end') e.res.end();
            else {
                e.res.write(data.data);
            }
        });
    }
}

subject.subscribe(parseURL);

http.createServer((req, res) => {
    // http://localhost:4000?url=file.txt
    subject.next({ req: req, res: res })
}).listen(4000);