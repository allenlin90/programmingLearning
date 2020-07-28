const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

// POST request to create a new task 
router.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then(function () {
        res.status(201).send(task);
    }).catch(function (error) {
        res.status(400).send(error);
    })
});

// GET request to get all task data 
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (error) {
        res.status(500).send();
    }
});

// GET request to get a specific task 
router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    if (_id.length !== 24) return res.status(400).send('User ID must be 24 characters long!');
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
})

// PATCH request to modify data of a specific task 
router.patch('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isDataAllValid = updates.every(update => allowedUpdates.includes(update))
    if (!isDataAllValid) {
        return res.status(400).send({ error: 'The input data is invalid!' });
    }

    try {
        // const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true, });
        const task = await Task.findById(id);
        updates.forEach(update => task[update] = req.body[update]);
        await task.save();
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(400).send();
    }
});

// Delete request to remove a specific task
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;