exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('sales')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('sales').insert([{ price: '20000$', car_id: 1 }]);
		});
};
