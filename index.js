const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const favicon = require('express-favicon');
const path = require('path');
require('dotenv').config();
const app = express();
const port = 3000;

// Import routes
const taskRoute = require('./routes/task');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(favicon(__dirname + '/dist/img/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api/tasks', taskRoute);


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