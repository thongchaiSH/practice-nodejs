var fs = require('fs');

var data='';
var readStream = fs.createReadStream(__dirname + "/" + "code.txt");
readStream.setEncoding("utf8");
readStream.on('data',(txt)=>{
    console.log(`Text : ${txt}`);
    data+=txt
});
readStream.on('end',()=>{
    console.log("Read Success !!");
    console.log(data);
})
readStream.on('error',(error)=>{
    console.log(error.stack);
})