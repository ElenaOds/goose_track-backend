const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required:  [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    phone: String,
    birthday: String,
    skype: String,
    userPhoto:String,
    
    token: String,
    

},
    { versionKey: false, timestamps: true},

)


const User = mongoose.model('users', userSchema);

module.exports = {
    User
};