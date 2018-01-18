"use strict";
let fs = require('fs');
let zlib = require('zlib');
let gzip = zlib.createGzip();

// Zip
let readable = fs.createReadStream(__dirname + '/source.txt');
let compressed = fs.createWriteStream(__dirname + '/destination.txt.gz');
readable.pipe(gzip).pipe(compressed).on('finish', function(){
	console.log('done compressing');
	// Unzip
	let gunzip = zlib.createGunzip();
	let unzipable = fs.createReadStream(__dirname + '/destination.txt.gz');
	let unziped = fs.createWriteStream(__dirname + '/destination.txt');
	unzipable.pipe(gunzip).pipe(unziped).on('finish', function(){
		console.log('done unzipping');
	});
});
