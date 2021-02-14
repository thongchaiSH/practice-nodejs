var fs = require('fs');
var data='thongchai tutorial nodejs and express mongodb angularJS 2';

var writer=fs.createWriteStream(__dirname+"/files/"+"output.txt");
writer.write(data,'utf8');
writer.end(); // จบ
writer.on('finish',()=>{
    console.log("Output done!");
})