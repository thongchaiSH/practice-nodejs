var pi = 3.14;
var update = () => {
    return "Update Server"
}
var add = function (a, b) {
    return a + b;
}

const method = {}
method.updateData = () => {
    console.log("Update data");
}
method.deleteUser=()=>{
    console.log("Delete User");
}

exports.pi = pi;
exports.add = add;
exports.update = update;

exports.data=method; //export object