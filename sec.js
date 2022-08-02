
const fs = require('fs');
fs.readFile(__filename, () => {
    console.log(1);
    setTimeout(() => {console.log(2)}, 0);
    setImmediate(() => {console.log(3)})
    setTimeout(() => {console.log(4)}, 100);
    process.nextTick(() => {console.log(5)})
    console.log(6);
});