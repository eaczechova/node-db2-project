const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
	db('cars')
		.then((cars) => {
			res.json(cars);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to fetch cars' });
		});
});

router.post('/', (req, res) => {
	const newCar = req.body;
	// console.log(newCar.VIN);
	db('cars')
		.insert(newCar)
		.then((newCar) => {
			res.status(201).json(newCar);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				error: 'There was an error while saving a new car to the database.',
			});
		});
});

module.exports = router;
