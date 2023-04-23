const mongoose = require('mongoose');
const connectDB = () => {
    mongoose.connect(process.env.MONGOURI)
        .then(console.log("DB Connected"))
}
module.exports = connectDB;