const mongoose = require('mongoose');

const URI = process.env.mongoDB_URI
  ? process.env.mongoDB_URI
  : 'mongodb://localhost/dbtest';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=>{
  console.log('BD is connected');
});