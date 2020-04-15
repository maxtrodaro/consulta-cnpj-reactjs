const connection = require("../database/connection");

module.exports = {
	async getStore(request, response) {
		const store = await connection("store").select("*");
		const [counter] = await connection("store").count();

		if (store.length < 1) {
			return response.json({ error: `Don't have stores yet.` });
		}

		response.header("Total-Count", counter["count(*)"]);

		return response.json(store);
	},

	async postStore(request, response) {
		const { name, cnpj, cod_emp, serv_ip } = request.body;

		const storeCnpj = await connection("store")
			.where("cnpj", cnpj)
			.select("cnpj");

		const storeCodemp = await connection("store")
			.where("cod_emp", cod_emp)
			.select("cod_emp");

		if (!storeCnpj.length && !storeCodemp.length) {
			await connection("store").insert({
				name,
				cnpj,
				cod_emp,
				serv_ip,
			});

			return response.json("Loja Cadastrada!");
		} else {
			return response.status(400).json("Loja já cadastrada, tente novamente!");
		}
	},

	async deleteStore(request, response) {
		const { cnpj } = request.params;
		// Lembrar de passar o usuário que apagou

		const store = await connection("store").where("cnpj", cnpj).first();

		if (!store) {
			return response.status(400).json({ error: "Loja não encontrada." });
		}

		await connection("store").where("cnpj", cnpj).delete();

		return response.status(204).send();
	},

	async editStore(request, response) {
		const { name, cnpjBody, cod_emp, serv_ip } = request.body;
		const { cnpj } = request.params;

		const store = await connection("store").where("cnpj", cnpj).first();

		if (!store) {
			return response.status(401).json({ error: "Loja não encontrada." });
		}

		await connection("store").where("cnpj", cnpj).update({
			name,
			cnpjBody,
			cod_emp,
			serv_ip,
		});

		return response.status(204).send();
	},
};
