const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Store', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    test('should be able to create a new Store', async () => {
        const response = await request(app)
            .post('/store')
            .send({
                name: 'Plakkar',
                cnpj: '53091821000147',
                cod_emp: 'PLAK0001',
                serv_ip: '10.1.230.4'
            });

        expect(response.body).toBe('Loja Cadastrada');
    });

    test('should be able to list a Store', async () => {
        await request(app)
            .post('/store')
            .send({
                name: 'Plakkar',
                cnpj: '53091821000147',
                cod_emp: 'PLAK0001',
                serv_ip: '10.1.230.4'
            });

        const response = await request(app)
            .get('/store');

        expect(response.body).toEqual([{
            id: expect.any(Number),
            name: expect.any(String),
            cnpj: expect.any(String),
            cod_emp: expect.any(String),
            serv_ip: expect.any(String),
        }]);
    });


    test('should be able to delete a Store', async () => {
        await request(app)
            .post('/store')
            .send({
                name: 'Plakkar',
                cnpj: '53091821000147',
                cod_emp: 'PLAK0001',
                serv_ip: '10.1.230.4'
            });

        const response = await request(app)
            .delete('/store/1');

        expect(response.body).toEqual({});
    });

    test('should not be able to delete a Store', async () => {
        await request(app)
            .post('/store')
            .send({
                name: 'Plakkar',
                cnpj: '53091821000147',
                cod_emp: 'PLAK0001',
                serv_ip: '10.1.230.4'
            });

        const response = await request(app)
            .delete('/store/:id');

        expect(response.body.statusCode == 400);
    });

    test('should be able to edit a Store', async () => {
        await request(app)
            .post('/store')
            .send({
                name: 'Plakkar',
                cnpj: '53091821000147',
                cod_emp: 'PLAK0001',
                serv_ip: '10.1.230.4'
            });

        const response = await request(app)
            .put('/store/1')
            .send({
                name: 'Linx',
                cnpj: '53091821000147',
                cod_emp: 'PLAK0001',
                serv_ip: '10.1.230.4'
            });

        expect(response.body).toEqual({});
    });

});
