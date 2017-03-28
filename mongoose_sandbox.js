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
		type:  {type: String, default: 'goldfish'},
		color: {type: String, default: 'small'},
		size:  {type: String, default: 'golden'},
		mass:  {type: Number, default: '0.007'},
		name:  {type: String, default: 'Angela'}
	});

	const Animal = mongoose.model('Animal', AnimalSchema);

	const animalData = [
		type: 'elephant',
		size: 'big',
		color: 'gray',
		mass: 6000,
		name: 'Lawrence'
	];

	var animal = new Animal({}); 

	elephant.save((err) => {
		if (err) console.error('Save Failed', err);
		else console.log('saved');
		db.close(() =>{
			console.log('db connection closed')
		});
	});

	animal.save();

});



























