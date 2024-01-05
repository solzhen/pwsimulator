const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    overness: {
        type: Number,
        required: true
    },
    birth_year: {
        type: Number,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Worker', workerSchema)