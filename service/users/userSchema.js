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
    phone: {
      type: String,
      default: ''
    },
    birthday: {
      type: Date,
      default: ''
    },
    skype: {
      type: String,
      default: ''
    },
    userPhoto: {
      type: String,
      default: null,
    },
    
    token:  {
      type: String,
      default: null,
    },
    

},
    { versionKey: false, timestamps: true},

)


const User = mongoose.model('users', userSchema);

module.exports = {
    User
};