const mongoose = require('mongoose');

const otpSchema =  mongoose.Schema({
    otp:{
        type : String,
        required : true
    },
    createdAt :{
        type : String,
        required : true,
        default : Date.now()
    },
    email:{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('otp',otpSchema);