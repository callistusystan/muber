/**
 * Created by Callistus Tan on 1/12/2017.
 */

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const routes = require('./routes/routes');

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/muber');
}

const app = express();

app.use(bodyParser.json());
routes(app);

// note that this error handler should
// always come after the route handler

// my own error handler middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

module.exports = app;