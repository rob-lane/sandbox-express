const express = require('express');
const path = require('path');
const routes = require('./routes/index');
import bodyParser from "body-parser";
import { Application } from "express";

const app : Application  = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.locals.appName = "Sandbox Express App";

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

export default app;
module.exports = app;