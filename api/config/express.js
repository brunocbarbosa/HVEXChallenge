const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    consign = require('consign');

/* CONFIGURE EXPRESS */
const app = express();

/* CONFIGURE BODY-PARSER */
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json());

/* CONFIGURE CORS */
const corsOptions = {
    origin: '*',
    optionsSuccessStatus:200
};

app.use(cors(corsOptions));

/* CONFIGURE CONSIGN */
consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app)

module.exports = app;