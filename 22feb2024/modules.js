const os = require('os');

console.log('OS Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('Network Interfaces:', os.networkInterfaces()); 


const https = require('https');

https.get('https://official-joke-api.appspot.com/random_joke', (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', (error) => {
    console.error('Error:', error);
});

const fs = require('fs');

fs.readFile('RestOperator.js', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});


const path = require('path');

const filePath = '/path/to/some/file.txt';
console.log('File Directory:', path.dirname(filePath));
console.log('File Name:', path.basename(filePath));
console.log('File Extension:', path.extname(filePath));

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// myEmitter.on('event', () => {
//     console.log('Event occurred!');
// });

// myEmitter.emit('event');