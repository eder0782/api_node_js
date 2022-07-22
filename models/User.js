const mongoose = require('mongoose');


const User =  mongoose.model('User',{
    name: String,
    sobrenome: String,
    password: String,
    email: String,
    photo: String,
    active: Boolean,
    admin: Boolean,     
})


module.exports = User;