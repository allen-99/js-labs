import { open } from 'node:fs';



setImmediate(() => console.log(1));

open('1.txt', 'r', (err, fd) => console.log(2));


new Promise(resolve => resolve(3)).then(console.log);



process.nextTick(() => console.log(4));

console.log(5);
setTimeout(() => console.log(0), 0);

queueMicrotask(() => console.log('---'));

console.log((new Date()).toLocaleDateString())