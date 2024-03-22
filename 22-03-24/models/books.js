const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
     },

    author: {
        type: String,
        required: true,
    },

    year: {
        type: Date,
        required: false,
        default: Date.now,
    },

    created_at: {
        type: Date,
        required: false,
        default: Date.now,
    },

    updated_at: {
        type: Date,
        required: false,
        default: Date.now,
    },
    });
    
    module.exports = mongoose.model("Book", bookSchema);