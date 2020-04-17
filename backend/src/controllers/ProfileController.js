const connection = require("../database/connection");
const generateToken = require("../util/Token/generateToken");

module.exports = {
	async getProfile(request, response) {
		const profile = await connection("profile").select("*");

		if (profile.length < 1) {
			return response.json({ error: `Don't have users yet.` });
		}

		return response.json(profile);
	},

	async postProfile(request, response) {
		const { name, username, password } = request.body;

		const profile = await connection("profile")
			.where("username", username)
			.select("username");

		if (!profile.length) {
			const [user] = await connection("profile").insert({
				name,
				username,
				password,
			});

			const token = generateToken({ id: user });

			return response.json({ token });
		} else {
			return response.json("Usuário já cadastrado, tente novamente!");
		}
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
