const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();

// POST request to create a new user (sign up)
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }

});

// POST request to authenticate user login with email as account and password
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        // generate a specific token for this user, not for all User!
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (error) {
        res.status(400).send();
    }
});

// GET request to get all user data 
router.get('/users/me', auth, async (req, res) => {
    // rather than returning all users data which doesn't make sense, this route handler is changed to return the profile of the authenticated user
    res.send(req.user);
});

// GET request to a specific user data 
router.get(`/users/:id`, async (req, res) => {
    const _id = req.params.id;
    if (_id.length !== 24) return res.status(400).send('User ID must be 24 characters long!');
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send()
    }
});

// PATCH request to modify data of a specific user
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid udpates!' });
    }

    try {
        const user = await User.findById(req.params.id);

        updates.forEach((update) => user[update] = req.body[update]);

        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, });

        await user.save();

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete request to remove a specific user
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;