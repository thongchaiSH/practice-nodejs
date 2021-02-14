# Practice 14-2-2021
[ปูพื้นฐาน Nodejs ฉบับผู้เริ่มต้น [2017][Full Course]](https://www.youtube.com/watch?v=IQqvP_W5GrQ&list=PLltVQYLz1BMBvWTQmgVLwdODfvcpLgmct)

### 1.Run File JS
``` 
node app.js
```
### 2.Call Module
``` js
// Export At module  method.js
exports.pi=pi;
exports.add=add;
exports.update=update;

//Import at App.js
var method = require('./method');
console.log(method.update()); 
```

### 3.File System
``` js
// Read File
fs.readFileSync(__dirname + "/" + "code.txt", 'utf8');
// Write File
fs.writeFileSync(__dirname + "/files/" + "helloNodeJS.txt", readme); //เขียนไฟล์
// Make Folder
fs.mkdir('files', function () {})
```

### 4.Create Server via module http
``` js
// file server.js
var http = require('http');
http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'}); //status
    res.end('Hello World !!');
}).listen(3000,'127.0.0.1');
```

### 5.Global Object
- global.js
### 6.Buffer
- buffer.js
### 7.Stream Reader
``` js
// streamReader.js
var readStream = fs.createReadStream(__dirname + "/" + "code.txt");
```
### 8.Stream Writer
``` js
// streamWriter.js
var writer=fs.createWriteStream(__dirname+"/files/"+"output.txt");
```
### 9.Pipe Read/Write at the same time
``` js
reader.pipe(writer);
```
### 10.Http Page
``` js
res.writeHead(200,{'Content-Type':'text/html'}); 
var myStream=fs.createReadStream(__dirname+"/"+"index.html",'utf8');
myStream.pipe(res);
```

### 11.Json Data
``` js
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(myuser));
```

### 12.Basic Routes
``` js
if (req.url === '/home' || req.url === '/') {
    //Html File
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myStream = fs.createReadStream(__dirname + "/" + "index.html", 'utf8');
    myStream.pipe(res);
}
```
### 13.Express
```
npm install express --save
node app.js
```
### 14.Express Routing
``` js
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
})
```
### 15.Middleware

### 16.TemplateEngine (EJS)
``` js
npm install ejs
//view engine ejs setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

```

### 17.EJS
``` js
app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>');
    const data={
        user:"thongchai",age:26,job:"programer"
    }
    res.render('profile',data);
})
```
``` html
<!-- Get parameter -->
<h1><%= user %> <%= job %> </h1>
 <!-- Include Template -->
<%- include('menu') -%> 
```

### 18.Post Method
``` js
npm install body-parser --save
var body=require('body-parser');
app.use(body());
app.post('/showData',(req,res)=>{
    const data={
        name:req.body.fname,
        lastName:req.body.lname
    }
    console.log(data);
    res.end(JSON.stringify(data));
})
```
### 19.Cookie
``` js
npm install cookie-parser --save
var cookie = require('cookie-parser');
app.use(cookie());
res.cookie('myCookie', 'thongchai');
res.clearCookie('myCookie');
```