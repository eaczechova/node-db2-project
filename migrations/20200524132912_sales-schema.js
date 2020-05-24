exports.up = function (knex) {
	return knex.schema.createTable('sales', (tbl) => {
		tbl.increments('id');
		tbl.timestamp('created_at').defaultTo(knex.fn.now());
		tbl.string('price', 128).notNullable();
		tbl.uuid('car_id').references('id').inTable('cars').notNull();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('sales');
};
