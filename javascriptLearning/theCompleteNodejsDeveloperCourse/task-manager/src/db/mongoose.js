const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

// create a model 
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        },
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error(`password can't contain "password"!`)
            }
        },
    },
});

// create an instance
// const me = new User({
//     name: 'Allen Lin',
//     email: 'linmgint@airportels.asia',
//     password: 'Password123',
// });

// save the instance created by the model 
// me.save().then(() => {
//     console.log(me);
// }).catch(error => {
//     console.log(error);
// })

const Task = mongoose.model('task', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

const task = new Task({ description: 'Wash the red car' });

task.save().then(() => {
    console.log(task);
}).catch(error => {
    console.log('Error', error);
});