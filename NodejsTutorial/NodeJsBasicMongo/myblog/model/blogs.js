const mongoose = require('mongoose');
const mongo = require('mongodb')
const dbUrl = 'mongodb://localhost:55001/BlogDB'

mongoose.connect(dbUrl, {
    useNewUrlParser: true
})

const db = mongoose.connection
const Schema = mongoose.Schema

const blogSchema = new Schema({
    id: {
        type: Schema.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const Blogs = module.exports = mongoose.model("blogs", blogSchema);
//insert
module.exports.createBlog = (newBlogs, callback) => {
    newBlogs.save(callback)
}
//get all
module.exports.getAllBlogs = (data) => {
    Blogs.find(data)
}
//delete
module.exports.deleteBlog = (id, callback) => {
    Blogs.findByIdAndDelete(id, callback);
}
//get by id
module.exports.getBlogId = (id, callback) => {
    const query = {
        _id: id
    }
    Blogs.findOne(query, callback);
}
//update blog
module.exports.updateBlog = (data,callback) => {
    var query={
        _id:data._id
    }
    console.log("Mongo data",data,query);
    Blogs.findByIdAndUpdate(query,{
        $set:{
            title:data.title,
            author:data.author,
            category:data.category
        }
    },{new:true},callback);
}