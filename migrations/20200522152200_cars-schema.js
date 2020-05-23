exports.up = function (knex) {
	return knex.schema.createTable('cars', (tbl) => {
		tbl.increments('id');
		tbl.string('VIN', 128).unique().notNullable();
		tbl.string('make', 128).notNullable();
		tbl.string('model', 128).notNullable();
		tbl.integer('mileage', 128).notNullable();
		tbl.string('transmission');
		tbl.string('titles');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('cars');
};
