require('newrelic');
var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
// Express Route
const studentRoute = require('./user/userroute')
const shopRoute = require('./shop/shoproute')
const reviewRoute = require('./review/reviewroute')
//Import the mongoose module
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

//Set up default mongoose connection
const   { MONGO_URI } = process.env;
console.log(MONGO_URI)
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({origin: ['http://localhost:3000','https://shoppingfirst.netlify.app'],credentials:true}));
app.use('/users', studentRoute)
app.use('/shop', shopRoute)
app.use('/review', reviewRoute)

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", 'https://shoppingfirst.netlify.app');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    res.send('Hello from Express!')})

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
