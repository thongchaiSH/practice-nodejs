# Practice NodeJS With MongoDB & Mongoose
[พัฒนาเว็บด้วย Nodejs , MongoDB & Mongoose( Full Course)](https://www.youtube.com/watch?v=eh9LPlsQVmw&t=181s)

## Install
### create project
```
npm install express-generator
express --view=ejs myblog
cd myblog 
npm install
npm start
```
### Install package
```
npm install mongodb mongoose express-validator
npm i nodemon -g
```
###  การสร้าง Route
```
var blogsRouter = require('./routes/blogs');
app.use('/blogs',blogsRouter);
```
### Create dabase 
- model->blogs.js

## Run
```
nodemon start
```