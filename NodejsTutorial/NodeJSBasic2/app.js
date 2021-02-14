console.log("Hello world");
var method = require('./method');
var fileSystem=require('./fileSystem');

console.log(method.pi);
method.data.updateData();
method.data.deleteUser()
console.log(method.update()); 

//File Stream
console.log(fileSystem.data); 