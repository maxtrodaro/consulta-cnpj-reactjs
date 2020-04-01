const connection = require('../database/connection');

module.exports = {

    async getStore (request, response) {
        const store = await connection('store').select('*');

        if (store.length < 1) {
            return response.json({ error: `Don't have stores yet.` });
        }

        return response.json(store);
    },

    async postStore (request, response) {
        const { name, cnpj, cod_emp, serv_ip } = request.body;

        await connection('store').insert({
            name,
            cnpj,
            cod_emp,
            serv_ip
        });

        return response.json('Loja Cadastrada');
    },

    async deleteStore (request, response) {
        const { id } = request.params;
        // Lembrar de passar o usuário que apagou

        const store = await connection('store')
            .where('id', id)
            .first();

        if (!store) {
            return response.json({ error: 'Store not found.' })
        }

        await connection('store')
            .where('id', id)
            .delete();

        return response.status(204).send();
    },

    async editStore (request, response) {
        const { name, cnpj, cod_emp, serv_ip } = request.body;
        const { id } = request.params;

        const store = await connection('store')
            .where('id', id)
            .first();

        if (!store) {
            return response.status(401).json({ error: 'Store not found.' });
        }

        await connection('store').where('id', id).update({
            name,
            cnpj,
            cod_emp,
            serv_ip,
        });

        return response.status(204).send();
    },

}
