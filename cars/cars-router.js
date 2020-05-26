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

router.delete('/:id', (req, res) => {
	const carId = req.params.id;
	console.log(carId);
	db('cars')
		.where({ id: carId })
		.del()
		.then((cars) => {
			if (cars > 0) {
				res.status(200).json({ id: Number(req.params.id) });
			} else {
				res.status(404).json({
					message: 'The car with the specified ID does not exist.',
				});
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				error: 'There was an error while saving a new car to the database.',
			});
		});
});

router.put('/:id', (req, res) => {
	const carId = req.params.id;
	const updatedCar = req.body;
	console.log(carId);
	db('cars')
		.where({ id: carId })
		.update(updatedCar)
		.then((cars) => {
			if (cars > 0) {
				res.status(200).json({ id: Number(req.params.id) });
			} else {
				res.status(404).json({
					message: 'The car with the specified ID does not exist.',
				});
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				error: 'Failed to edit a car.',
			});
		});
});

module.exports = router;
