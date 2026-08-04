const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOneId, userOne, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should singup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Allen',
        email: 'apple@gmail.com',
        password: 'MyPass777!',
    }).expect(201);

    // assert that database was changed correctly 
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    // assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Allen',
            email: 'apple@gmail.com'
        },
        token: user.tokens[0].token
    });

    // check if the password is added "salt" and not stored directly
    expect(user.password).not.toBe('MyPass777!');
});

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password,
    }).expect(200);

    // validate new token is saved
    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);
});

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'google@apple.com',
        password: '123456789',
    }).expect(400);
});

test('Should get profile for user', async () => {
    // await request(app).get('/users/me').send().expect(200);
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
});

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
});

test('Should delete account for user', async () => {
    const response = await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);

    // Validate user is removed
    const user = await User.findById(response.body._id);
    expect(user).toBeNull();
});

test('Should delete account for user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
});

test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg') // .attach() is a supertest method 
        .expect(200);
    const user = await User.findById(userOneId);
    // .toBe() is using === 
    // expect.any() can take other types of data such as String, Number, Boolean
    expect(user.avatar).toEqual(expect.any(Buffer)); // use .toEqual() method to check if objects are equivalent
});

test('Should update valid user fields', async () => {
    const name = 'John Doe';
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name
        })
        .expect(200);
    const user = await User.findById(userOneId);
    // expect(user.name).toEqual(name);
    expect(user.name).not.toBe(userOne.name);
});

test('Should update valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Bangkok'
        })
        .expect(400);
});