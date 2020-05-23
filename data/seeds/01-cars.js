exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('cars').insert([
				{ VIN: 'WX12345', make: 'Renault', model: 'Kadjar', mileage: 2000 },
				{ VIN: 'KT12345', make: 'VW', model: 'Tiguan', mileage: 5000 },
			]);
		});
};
