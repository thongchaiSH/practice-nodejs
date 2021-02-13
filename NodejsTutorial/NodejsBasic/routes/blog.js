var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const monk = require('monk')



// Connection URL
const url = 'localhost:55000/TutorialDB';
const db = monk(url);
db.then(() => {
  console.log('Connected correctly to server')
})


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render("blog");
});


router.get('/add', function (req, res, next) {
  res.render("addBlog");
});

router.post('/add', [
  body("name", "กรุณาป้อนชื่อบทความ").not().isEmpty(),
  body("description", "กรุณาใส่เนื้อหาบทความ").not().isEmpty(),
  body("author", "กรุณาระบุชื่อผู้แต่ง").not().isEmpty(),
], function (req, res) {
  console.log(req.body);
  // console.log(req.body.name);
  // console.log(req.body.description);
  // console.log(req.body.author);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Error", errors);
    res.render("addBlog", { errors: errors.array() });
    // return res.status(400).json({ errors: errors.array() });
  } else {
    //insert to 
    const collection = db.get('blogs')
    collection.insert({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    }).then((docs) => {
      console.log("Save Success !!",docs);
      req.flash("info", "บันทึกบทความเรียบร้อยแล้ว");
      res.redirect('/blogs/add');
    }).catch((err) => {
      res.rend(err);
    }).then(() => {
      db.close();
    })
  }
});


module.exports = router;
