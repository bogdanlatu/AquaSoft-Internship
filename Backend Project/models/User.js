const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
    Username : {
        type : String
    },
    Password : {
        type : Date
    }
});

module.exports = mongoose.model('User',UserSchema,'Users');