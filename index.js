const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();

mongoose.connect('mongodb://localhost/monprofdb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', routes);


app.listen(process.env.port || 4000, function() {
    console.log('Server is listening...');
});