const mongoose = require('mongoose')

const staffSchema = mongoose.Schema({
    staffname: {
        type: String,
        required: true,
    },
    staffid: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    hostel: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Staff', staffSchema);