const router = require("express").Router();
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/StudentController");

router.get("/", getAllStudents);

router.get("/:id", getStudentById);

router.post("/", createStudent);

router.patch("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;
