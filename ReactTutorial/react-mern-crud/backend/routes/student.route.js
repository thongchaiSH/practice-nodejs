let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student model
let studentSchema=require('../models/Student');

// Create Student
router.route('/craete-student').post((req,res,next)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data);
            res.json(data)
        }
    })
})

// Read Student
router.route('/').get((req,res)=>{
    studentSchema.find((err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data);
            res.json(data)
        }
    });
})

// Get single student
router.route('/edit-student/:id').get((req,res)=>{
    studentSchema.findById(req.params.id,(err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data);
            res.json(data)
        }
    })
})

// Update Student
router.route('/update-student/:id').put((req,res,next)=>{
    studentSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(err,data)=>{
        if(err){
            return next(err);
            console.log(data);
        }else{
            console.log(data);
            res.json(data)
        }
    })
})

//Delete Student
router.route('/delete-student/:id',).delete((req,res,next)=>{
    studentSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data);
            res.status(200).json({
                msg:data
            })
        }
    })
})

module.exports=router;