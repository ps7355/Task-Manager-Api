
const express = require('express');
const route = require('./Routes/router')
const app = express();
app.use(express.json())

app.use('/',route);

module.exports = app;