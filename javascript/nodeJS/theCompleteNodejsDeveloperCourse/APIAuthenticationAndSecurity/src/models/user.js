const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('./task');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
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
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
});

// virtual property set up for mongoose to learn the relationship between collections
userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner',
});

// we need to use 'this' to the specific user, so we should use a regular function statement
// 'methods' is the property for instances which method on every instance is a bit different
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString(), }, 'thisismynewcourse');

    // assign the token to the user instance 
    user.tokens = user.tokens.concat({ token });
    // save the instance to database 
    await user.save();

    return token;
}

// return only non-sensitive data back to user after singup and login 
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
}

// create a new method to check user email (as account) and password 
// 'statics' is the property accessible on the prototype
userSchema.statics.findByCredentials = async function (email, password) {
    const user = await User.findOne({ email });

    // throw an error if there's no user
    if (!user) {
        throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Unable to login');
    }

    return user;
}

// hash the plain text password before saving 
userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

// delete user tasks when user is removed
userSchema.pre('remove', async function (next) {
    const user = this;
    // delete multiple tasks by using only the owner field
    await Task.deleteMany({ owner: user._id });
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;