const express = require('express');
const app = express();
const bookRoute = express.Router();
let Book = require('../model/Book')

//Add Book
bookRoute.route('/add-book').post((req, res, next) => {
    Book.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})

//Get All Book
bookRoute.route('/').get((req, res) => {
    Book.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})

//Get Book
bookRoute.route('/read-book/:id').get((req, res) => {
    Book.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})

//Update Books
bookRoute.route('/update-book/:id').put((req, res) => {
    console.log('ID',req.params.id,req.body);
    Book.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            console.log('Book updated Successfully');
            res.json(data);
        }
    })
})

//Delete Book
bookRoute.route('/delete-book/:id').delete((req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = bookRoute;