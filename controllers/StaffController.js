const Staff = require("../models/Staffs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const getAllStaffs = async (req, res) => {
  try {
    const staff = await Staff.find();
    console.log(staff);
    res.send(staff);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server Error");
  }
};

const getStaffById = async (req, res) => {
  try {
    var userToken = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
    res.header("auth", userToken).json(userToken);

    const staff = await Staff.findById(req.params.id);
    res.json(staff);
  } catch (err) {
    console.log(err);
    res.status(400), send("Server Error");
  }
};

const createStaff = async (req, res) => {
  const { staffname, staffid, department, hostel } = req.body;
  try {
    const staff = new Staff({
      staffname,
      staffid,
      department,
      hostel,
    });
    await staff.save();
    res.send(staff).send("Created");
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

const updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    await staff.updateOne();
    res.status(200).send("Updated");
  } catch (err) {
    console.log(err);
    res.status(400), send("Server Error");
  }
};

const deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    await staff.deleteOne();
    res.status(200).send("Deleted");
  } catch (err) {
    console.log(err);
    res.status(400), send("Server Error");
  }
};

module.exports = {
  getAllStaffs,
  getStaffById,
  createStaff,
  updateStaff,
  deleteStaff,
};
