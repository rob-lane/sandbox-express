const express = require('express');
const path = require('path');
const routes = require('./routes/index');
import { Request, Response } from 'express';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.locals.appName = "Sandbox Express App";

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

module.exports = app;