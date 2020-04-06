const connection = require("../database/connection");

module.exports = {
	async getProfile(request, response) {
		const profile = await connection("profile").select("*");

		if (profile.length < 1) {
			return response.json({ error: `Don't have stores yet.` });
		}

		return response.json(profile);
	},

	async postProfile(request, response) {
		const { name, username } = request.body;

		await connection("profile").insert({
			name,
			username,
		});

		return response.json("Usuário Cadastrado");
	},

	async deleteProfile(request, response) {
		const { username } = request.params;

		const profile = await connection("profile")
			.where("username", username)
			.first();

		if (!profile) {
			return response.json({ error: "Profile not found." });
		}

		await connection("profile").where("username", username).delete();

		return response.status(204).send();
	},

	async editProfile(request, response) {
		const { name, username } = request.body;
		const { oldUsername } = request.params;

		const profile = await connection("profile")
			.where("username", oldUsername)
			.first();

		if (!profile) {
			return response.json({ error: "Username not found" });
		}

		await connection("profile").where("username", oldUsername).update({
			name,
			username,
		});

		return response.status(204).send();
	},
};
