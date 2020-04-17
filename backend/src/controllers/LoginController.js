const connection = require("../database/connection");
const generateToken = require("../util/Token/generateToken");

module.exports = {
	async loginProfile(request, response) {
		const { username } = request.body;

		const name = await connection("profile")
			.where("username", username)
			.select("name")
			.first();

		if (!name) {
			return response
				.status(400)
				.json({ error: "No profile found with this username" });
		}

		return response.json(name);
	},

	async jwtProfile(request, response) {
		const { username, password } = request.body;

		const user = await connection("profile")
			.where({
				username: username,
				password: password,
			})
			.select("id", "username", "password", "name");

		if (user.length < 1) {
			return response.status(400).json("Usuário não encontrado");
		}

		const token = generateToken({ id: user[0].id });

		return response.status(200).send({ user, token });
	},
};
