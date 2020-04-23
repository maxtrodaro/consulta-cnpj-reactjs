const connection = require("../database/connection");

module.exports = {
	async getServer(request, response) {
		const server = await connection("server").select("*");

		if (server.length < 1) {
			return response.json({ error: `Don't have servers yet.` });
		}

		return response.json(server);
	},

	async createServer(request, response) {
		const { name, ip } = request.body;

		const serverName = await connection("server")
			.where("name", name)
			.select("name");
		if (!serverName.length) {
			await connection("server").insert({
				name,
				ip,
			});

			return response.json("Server Cadastrado!");
		} else {
			return response
				.status(400)
				.json("Servidor já cadastrado, tente novamente!");
		}
	},

	async deleteServer(request, response) {
		const { name } = request.params;

		const server = await connection("server").where("name", name).first();

		if (server) {
			await connection("server").where("name", name).delete();

			return response.status(204).json("Loja deletada!");
		} else {
			return response.status(400).json({ error: `Server don't find` });
		}
	},
};
