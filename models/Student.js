const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  rollnumber: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  hostelName: {
    type: String,
    required: true,
  },
  roomNo: {
    type: Number,
    reuired: true,
  },
  attendancepercent: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
