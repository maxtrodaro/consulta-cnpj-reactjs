exports.up = function (knex) {
	return knex.schema.createTable("store", function (table) {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.string("cnpj").notNullable();
		table.string("cod_emp").notNullable();
		table.string("serv_ip").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("store");
};
