const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User