const mongoose = require("mongoose")


const sellSchema = new mongoose.Schema({

    fname: {
        type: String,
        maxLength: 50,
        required: true,
    },

    lname: {
        type: String,
        maxLength: 50,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

    mo_no: {
        type: Number,
        maxLength: 10,
        required: true,
    },

    dob: {
        type: Date,
        required: true,
    }
    ,
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        maxLength: 50,
        required: true,
    },
    pincode: {
        type: Number,
        maxLength: 6,
        required: true,
    },
    state: {
        type: String,
        maxLength: 50,
        required: true,
    },

    country: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("Sell", sellSchema);