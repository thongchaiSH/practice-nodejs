var express = require('express');
const blogs = require('../model/blogs');
var router = express.Router();
const Blogs = require('../model/blogs')
const { check, validationResult } = require('express-validator')


router.get('/', (req, res) => {
    // res.send('response with a resource')
    Blogs.getAllBlogs((err, blogs) => {
        if (err) throw err
        // console.log(blogs);
        res.render('./blogs/index', { data: 'Hello Mongoose', blogs: blogs });
    });

})

router.get('/add', (req, res) => {
    res.render('./blogs/addForm', { data: "เพิ่มบทความ" });
})

router.get("/delete/:id", (req, res) => {
    Blogs.deleteBlog([req.params.id], (err) => {
        if (err) throw err;
        console.log("Delete ID : ", req.params.id);
        res.redirect('/blogs')
    })
})

router.get("/:id", (req, res) => {

    Blogs.getBlogId(req.params.id, (err, data) => {
        if (err) throw err;
        console.log("Edit ID : ", req.params.id);
        console.log("Data =>", data);
        res.render('./blogs/editForm', { data: "แก้ไขบทความ", blog: data })
    })

})


router.post('/add', [
    check('title', 'กรุณาป้อนชื่อบทความ').not().isEmpty(),
    check('author', 'กรุณาป้อนชื่อผู้เขียน').not().isEmpty(),
], (req, res) => {
    // console.log(req.body);

    const result = validationResult(req);
    var errors = result.errors;
    console.log(errors);
    if (errors.length > 0) {
        //have error
        console.log("Error", errors);
        res.render('./blogs/addForm', { data: "เพิ่มบทความ", errors: errors });
    } else {
        const data = new Blogs({
            title: req.body.title,
            author: req.body.author,
            category: req.body.category
        })
        Blogs.createBlog(data, (err, callBack) => {
            if (err) throw err
            res.redirect("/blogs")
        })
    }
})
//Edit
router.post('/edit/:id', [
    check('title', 'กรุณาป้อนชื่อบทความ').not().isEmpty(),
    check('author', 'กรุณาป้อนชื่อผู้เขียน').not().isEmpty(),
], (req, res) => {
    const id=req.params.id;
    console.log("Update id:",id);
    const result = validationResult(req);
    var errors = result.errors;
    console.log(errors);
    if (errors.length > 0) {
        //have error
        console.log("Error", errors);
        res.render('./blogs/'+id, { data: "แก้ไขบทความ", errors: errors });
    } else {
        const data = new Blogs({
            _id:id,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category
        })
        Blogs.updateBlog(data, (err, callBack) => {
            if (err) throw err
            res.redirect("/blogs")
        })
    }

})

module.exports = router;