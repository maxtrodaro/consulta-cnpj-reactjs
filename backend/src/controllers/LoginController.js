const connection = require('../database/connection');

module.exports = {
    async loginProfile(request, response) {
        const { username } = request.body;

        const name = await connection('profile')
            .where('username', username)
            .select('name')
            .first()
        
        if (!name) {
            return response.status(400).json({ error: 'No profile found with this username' });
        }

        return response.json(name);
    }
}