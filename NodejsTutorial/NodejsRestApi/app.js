var express = require('express');
var app = express();
var fs = require('fs'); //อ่านไฟล์จาก user.json

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Application Run At ${host} : ${port}`);
})

app.get('/users', (req, res) => {
    fs.readFile(__dirname + "/" + "user.json", 'utf8', (err, data) => {
        console.log(data);
        res.end(data);
    })
});

//แบบมีเงื่อนไข
app.get('/users/:id', (req, res) => {
    fs.readFile(__dirname + "/" + "user.json", 'utf8', (err, data) => {
        const users = JSON.parse(data);
        const user = users['user' + req.params.id];
        console.log(user);
        // const result = users.filter(user => user.id = req.params.id);
        // console.log(result);
        res.end(JSON.stringify(user));
    })
})


var user = {
    "user4": {
        "name": "Jureeporn",
        "password": "1234",
        "ocupation": "nurse",
        "id": 4
    }
}
app.post('/users', (req, res) => {
    fs.readFile(__dirname + "/" + "user.json", 'utf8', (err, data) => {
        data = JSON.parse(data);
        data['user4'] = data['user4'];
        res.end(JSON.stringify(data));
    })
});

app.delete('/users/:id',(req,res)=>{
    fs.readFile(__dirname + "/" + "user.json", 'utf8', (err, data) => {
        data = JSON.parse(data);
        delete data['user' + req.params.id];
        res.end(JSON.stringify(data));
    })
});