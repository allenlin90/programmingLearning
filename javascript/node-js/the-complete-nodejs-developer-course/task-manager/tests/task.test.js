const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/task');
const { userOneId, userOne, userTwo, taskOne, taskTwo, taskThree, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'From my test',
        })
        .expect(201);
    const task = await Task.findById(response.body._id);
    expect(task).not.toBeNull();
    expect(task.completed).toEqual(false);
});

test('Request all tasks for user one', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    // const numTasks = await Task.find({ owner: userOneId });
    // expect(numTasks.length).toBe(2);
    expect(response.body.length).toEqual(2);
});

test('Should not delete other users tasks', async () => {
    const response = await request(app)
        .delete(`/tasks/${taskOne._id}`) // doesn't require column character `:` here
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404); // should be 404 rather than 500, because user two doesn't have the task
    // const task = await Task.findById({ _id: taskOne._id }); 
    const task = await Task.findById(taskOne._id); // we can pass the string value directly without passing an object
    expect(task).not.toBeNull();
});