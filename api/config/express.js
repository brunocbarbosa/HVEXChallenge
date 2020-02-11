const express = require('express'),
    bodyParser = require('body-parser'),
    consign = require('consign');

/* CONFIGURE EXPRESS */
const app = express();

/* CONFIGURE BODY-PARSER */
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json());

/* CONFIGURE CONSIGN */
consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app)

module.exports = app;