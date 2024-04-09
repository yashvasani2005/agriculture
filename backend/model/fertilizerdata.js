const mongoose = require("mongoose")


const fertilizer = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },

    disc: {
        type: String,
     
        required: true,
    },
    oldprice: {
        type: Number,
        required: true,
    },

    newprice: {
        type: Number,
     
        required: true,
    },

    imgSrc: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model("Fertilizer", fertilizer);