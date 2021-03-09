const exporess = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = exporess();
app.use(bodyParser.json());
app.use(cors());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://post-clusterip-srv:4000/events", event).catch((err) => {
    console.log(err.message);
  }); //Post
  axios.post("http://comments-srv:4001/events", event).catch((err)=>{
    console.log(err.message);
  }); //Comment
  axios.post("http://query-srv:4002/events", event).catch((err)=>{
    console.log(err.message);
  }); //query service
  axios.post("http://moderation-srv:4003/events", event).catch((err)=>{
    console.log(err.message);
  }); //moderaion service

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  console.log("Event sizr =", events);
  res.send(events);
});

app.listen(4005, () => {
  console.log("Event Bus Listening on 4005");
});
