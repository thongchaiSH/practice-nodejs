const { render } = require('ejs');
var express = require('express');
var body = require('body-parser');
var cookie = require('cookie-parser');

var path = require('path');
var app = express();
app.use(cookie());
app.use(body());
//view engine ejs setup
// app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>');
    const data = {
        user: "thongchai", age: 26, job: "programer"
    }
    res.render('profile', data);
})

app.get('/showForm', (req, res) => {
    res.sendFile(__dirname + "/" + 'showForm.html');
})
app.get('/showData', (req, res) => {
    const data = {
        name: req.query.fname,
        lastName: req.query.lname
    }
    console.log(data);
    res.end(JSON.stringify(data));
})
app.post('/showData', (req, res) => {
    const data = {
        name: req.body.fname,
        lastName: req.body.lname
    }
    console.log(data);
    res.end(JSON.stringify(data));
})

//Cookie
app.get('/createCookie', (req, res) => {
    res.cookie('myCookie', 'thongchai');
    res.end('Create Cookie!!');
})
app.get('/delCookie', (req, res) => {
    res.clearCookie('myCookie');
    res.end("Clear Cookie done!");
})



app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/database', (req, res) => {
    res.render('database');
})

app.get('/:id', (req, res) => {
    res.send(`<h1>Hello World ${req.params.id}</h1>`);
})
app.get('/profile/:name', (req, res) => {
    res.send(`<h1>Hello !! ${req.params.name}</h1>`);
})

//Add middleware
app.use('/user/profile/:name', (req, res, next) => {
    console.log("Request : " + new Date(), req.method, req.url);
    res.send(`<h1>Hello !! ${req.params.name}</h1>`);
});

app.listen('3000');
console.log("Server is started!!");