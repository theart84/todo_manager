const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = 3000;

// Import routes
const apiRoute = require('./routes/api');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', apiRoute);


app.get('/', (req, res) => {
  res.send('Api started!');
})

// Connect to DB
mongoose.connect(process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
      console.log('Connect to DB');
    })

// Listener
app.listen(port);