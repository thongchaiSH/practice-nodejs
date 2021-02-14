var buf=new Buffer(10);
console.log(buf);

var buf2=new Buffer("Thongchai ฟลุ๊ค",'utf8');
console.log(buf2,buf2.toString());

var buf3=new Buffer(300);
len=buf3.write("Thongchai Sittikhetkorn");
console.log(len,buf3.toString());

for (let index = 0; index < buf3.length; index++) {
    // console.log(buf3[index].toString());
}

// Buffer Json
var buf=new Buffer("Thongchai");
var json=buf.toJSON(buf);
console.log(json);

var buf1=new Buffer("Buffer1");
var buf2=new Buffer("Buffer2");
var buf3=Buffer.concat([buf1,buf2]);
console.log(buf3.toString());