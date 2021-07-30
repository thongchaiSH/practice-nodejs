var express = require("express");
var router = express.Router();
var log4js = require("log4js");
var log = log4js.getLogger();

/* GET home page. */
router.get("/", function (req, res, next) {
  log.error("hello hello");
  log.debug("hello hello");
  res.render("index", { title: "Express" });
});

module.exports = router;
