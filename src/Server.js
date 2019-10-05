const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect("mongodb+srv://feira:feira@feira-xk9ph.gcp.mongodb.net/feira?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

app.use(express.json());

app.use(routes);

app.listen(7777);