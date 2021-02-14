var fs = require('fs');

var readme = fs.readFileSync(__dirname + "/" + "code.txt", 'utf8');


fs.mkdir('files', function () {
    console.log("Make Folder done");
    fs.writeFileSync(__dirname + "/files/" + "helloNodeJS.txt", readme); //เขียนไฟล์
});

exports.data = readme;