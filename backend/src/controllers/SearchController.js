const connection = require("../database/connection");

module.exports = {
	async getStore(request, response) {
		const cnpj = request.headers.cnpj;
		const [counter] = await connection("store").count();

		const store = await connection("store")
			.where("cnpj", cnpj)
			.select(["store.name", "store.cnpj", "store.cod_emp", "store.serv_ip"]);

		if (store.length < 1) {
			return response.json({ error: "Store not found." });
		}

		response.header("Total-Count", counter["count(*)"]);

		return response.json(store);
	},
};
