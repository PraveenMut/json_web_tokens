const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = new express();

// database connection
mongoose.connect('mongodb://localhost:27017/test_user_db1', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('mongodb not on')
  } else {
    console.log('mongodb connected')
  }
})

// connect to router
app.use(require('./routes'))

// listen on port 3000
app.listen(3000, () => console.log('listening on port 3000'))