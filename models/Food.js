const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    day: {
        type: String,
        required: true,
    },
    breakfast: {
        type: String,
        required: true
    },
    breakfasttiming: {
        type: String,
        required: true
    },
    lunch: {
        type: String,
        required: true
    },
    lunchtiming: {
        type: String,
        required: true
    },

    dinner: {
        type: String,
        reuired: true
    },
    dinnertiming: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Food', foodSchema);