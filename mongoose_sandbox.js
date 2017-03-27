'use strict'

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sandbox');

const db = mongoose.connection;

db.on('error', (err) => {
	console.error('connection error:', err);
});

db.once('open', () => {
	console.log('db connection successful');
	// all database communication goes here

	const Schema = mongoose.Schema;
	const AnimalSchema = new Schema({
		type: String,
		color: String,
		size: String,
		mass: Number,
		name: String
	});

	const Animal = mongoose.model('Animal', AnimalSchema);

	const elephant = new Animal({
		type: 'elephant',
		size: 'big',
		color: 'gray',
		mass: 6000,
		name: 'Lawrence'
	});

	elephant.save((err) => {
		if (err) console.error('Save Failed', err);
		else console.log('saved');
		db.close(() =>{
			console.log('db connection closed')
		});
	});

});