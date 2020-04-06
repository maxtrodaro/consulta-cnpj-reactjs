exports.up = function (knex) {
	return knex.schema.createTable("profile", function (table) {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.string("username").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("profile");
};
