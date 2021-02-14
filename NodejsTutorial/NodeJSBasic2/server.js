var http = require('http');
var fs = require('fs');

var myuser = {
    "name": "thongchai",
    "job": "programer",
    "age": 26
}

http.createServer((req, res) => {
    // res.writeHead(200,{'Content-Type':'text/plain'}); //status
    // res.end('Hello World !!');
    console.log(`URL request = ${req.url}`);

    if (req.url === '/home' || req.url === '/') {
        //Html File
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var myStream = fs.createReadStream(__dirname + "/" + "index.html", 'utf8');
        myStream.pipe(res);
    } else if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(myuser));
    }else {
        //Page not found
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var myStream = fs.createReadStream(__dirname + "/" + "notfound.html", 'utf8');
        myStream.pipe(res);
    }

}).listen(3000, '127.0.0.1');
console.log("Server is started !!");