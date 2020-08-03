const request = require('supertest');
const app = require('../src/app');

test('Should singup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Allen',
        email: 'apple@gmail.com',
        password: 'MyPass777!',
    }).expect(201)
})