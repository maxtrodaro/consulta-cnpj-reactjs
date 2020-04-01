const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Profile', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    test('should be able to create a new Profile', async () => {
        const response = await request(app)
            .post('/profile')
            .send({
                name: 'Eduardo',
                username: 'egodoy'
            });

        expect(response.body).toBe('Usuário Cadastrado');
    });

    test('should be able to list a Profile', async () => {
        await request(app)
            .post('/profile')
            .send({
                name: 'Eduardo',
                username: 'egodoy'
            });

        const response = await request(app)
            .get('/profile');

        expect(response.body).toEqual([{
            id: expect.any(Number),
            name: expect.any(String),
            username: expect.any(String)
        }]);
    });

    test('should be able to delete a Profile', async () => {
        await request(app)
            .post('/profile')
            .send({
                name: 'Eduardo',
                username: 'egodoy'
            });

        const response = await request(app)
            .delete('/profile/egodoy');

        expect(response.body).toEqual({});
    });

    test('should not be able to delete a Profile', async () => {
        await request(app)
            .post('/profile')
            .send({
                name: 'Eduardo',
                username: 'egodoy'
            });

        const response = await request(app)
            .delete('/profile/:id');

        expect(response.body.statusCode == 400);
    });

    test('when you try create a new Profile without name on body request', async () => {
        const test = await request(app)
            .post('/profile')
            .send({
                username: 'egodoy'
            });

        expect(test.body.message).toBe('"name" is required');
    });

    test('when you try create a new Profile without username on body request', async () => {
        const test = await request(app)
            .post('/profile')
            .send({
                name: 'Eduardo'
            });

        expect(test.body.message).toBe('"username" is required');
    });

});
