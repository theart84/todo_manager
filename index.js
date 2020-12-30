const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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
mongoose.connect('mongodb+srv://todos:todos2020@cluster0.4gad7.mongodb.net/todos',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
      console.log('Connect to DB');
    })

// Listener
app.listen(port);