let mongoose = require('mongoose');

// create a model class
let userModel = mongoose.Schema({
    fullname: String,
    dob: Date,
    username: String,
    email: String,

},
{
    collection: "users"
});

module.exports = mongoose.model('User', userModel);