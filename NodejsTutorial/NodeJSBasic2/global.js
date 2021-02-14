const { log } = require("console");

console.log(__filename);
console.log(__dirname);


function printHello() {
    console.log("Hello World");
}

var t=setTimeout(printHello, 2000);
clearTimeout(t); //clear timeout

setInterval(() => {
    console.log("Temp");
}, 1000);