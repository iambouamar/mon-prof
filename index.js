const express = require('express');
const routes = require('./routes/api');
const app = express();


app.use('/api', routes);


app.listen(process.env.port || 4000, function() {
    console.log('Server is listening...');
});