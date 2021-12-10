const os = require('os');

console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`Free memory: ${os.freemem()} bytes`);
console.log(`Total memory: ${os.totalmem()} bytes`);