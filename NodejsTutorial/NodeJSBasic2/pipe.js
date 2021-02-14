var fs=require('fs');

var reader=fs.createReadStream('code.txt');
var writer=fs.createWriteStream('file1.txt');
writer.on('finish',()=>{
    console.log("Write Done");
})
reader.pipe(writer);