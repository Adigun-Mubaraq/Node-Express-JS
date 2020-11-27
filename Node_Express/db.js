//Import the mongoose module
var mongoose = require('mongoose');
const { compile } = require('jade');

const user = "mbq";
const pass = "mubaraq123";
const dbname = "animal_farm";


var mongoDB = `mongodb+srv://${user}:${pass}@cluster0.0mjoi.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function(){
    console.log('MongoDB connection success')
});

module.exports = db;