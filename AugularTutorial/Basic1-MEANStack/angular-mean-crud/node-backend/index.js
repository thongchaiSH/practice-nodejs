const { trigger } = require('@angular/animations');
const express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDb = require('./database/db')

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database successfully connected");
}, error => {
    console.log("Database error ", error);
});

const bookRoute = require('./routes/book.routes');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors());

//Static
app.use(express.static(path.join(__dirname, 'dist/')))
//Base Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})
//API Root
app.use('/api', bookRoute);

//Port
const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('Listening on port'+port);
})
