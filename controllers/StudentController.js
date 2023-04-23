const Student = require("../models/Student");
// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//     cb(null, "../Images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

const getAllStudents = async (req, res) => {
  try {
    const student = await Student.find();
    console.log(student);
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server Error");
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    console.log(err);
    res.status(400), send("Server Error");
  }
};

const createStudent = async (req, res) => {
  const {
    studentname,
    rollnumber,
    year,
    department,
    hostelName,
    roomNo,
    attendancepercent,
  } = req.body;
  try {
    const student = new Student({
      studentname: studentname,
      rollnumber: rollnumber,
      year: year,
      department: department,
      hostelName: hostelName,
      roomNo: roomNo,
      attendancepercent: attendancepercent,
    });
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    await student.updateOne();
    res.status(200).send("Updated");
  } catch (err) {
    console.log(err);
    res.status(400).send("Server Error");
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    await student.deleteOne();
    res.status(200).send("Updated");
  } catch (err) {
    console.log(err);
    res.status(400), send("Server Error");
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
