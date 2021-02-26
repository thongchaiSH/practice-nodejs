// import module hapi
const Hapi = require("hapi");
const users = require("./user");

//Crate server
const server = new Hapi.Server({
  host: "localhost",
  port: 5555,
});

server.route({
  method: "GET",
  path: "/hello",
  handler: (req, h) => {
    return "<h1>Hello Hapi</h1>";
  },
});

server.route({
  method: "GET",
  path: "/users",
  handler: (req, h) => {
    return users.findAll();
  },
});

server.route({
  method: "GET",
  path: "/users/{id}",
  handler: async (req, h) => {
    const id = req.params.id;
    console.log("id = ", id);
    const result = await users.findById(id);
    console.log("Result :", result);
    return result;
  },
});

server.route({
  method: "POST",
  path: "/users",
  handler: (req, h) => {
    const user = ({ id, username, name, position } = req.payload);
    console.log("Save user",user);
    return users.save(user);
  },
});

server.start(function () {
  console.log("Hapi running at: ", server.info.uri);
});
