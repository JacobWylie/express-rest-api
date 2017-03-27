'use strict';

const express = require('express');
const app = express();
const router = require('./routes');
const jsonParser = require('body-parser').json;
const logger = require('morgan');

app.use(logger('dev'));
app.use(jsonParser());

app.use('/questions', router);












const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Express server is listening on port:', port);
});