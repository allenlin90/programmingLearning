const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
})

const User = mongoose.model('User', userSchema);

module.exports = User;