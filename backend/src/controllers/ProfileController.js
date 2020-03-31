const connection = require('../database/connection');

module.exports = {

    async getProfile (request, response) {
        const profile = await connection('profile').select('*');

        return response.json(profile);
    },

    async postProfile (request, response) {
        const { name, username } = request.body;

        await connection('profile').insert({
            name,
            username
        });

        return response.json('Usuário Cadastrado');
    },

    async deleteProfile (request, response) {
        const { username } = request.params;

        await connection('profile').where('username', username).delete();

        return response.status(204).send();
    },

}
