var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
    // res.send('Hello User Thongchai ');
    res.render("product"); //call view
})

router.get('/add',function(req,res,next){
    res.send('Add Product');
})

router.get('/edit',function(req,res,next){
    res.send('Edit Product');
})

router.get('/delete',function(req,res,next){
    res.send('Delete Product');
})

module.exports=router;