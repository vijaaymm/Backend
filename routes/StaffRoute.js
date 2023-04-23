const router = require("express").Router();
const userToken = require("../middleware/auth");
const {
  getAllStaffs,
  getStaffById,
  createStaff,
  updateStaff,
  deleteStaff,
} = require("../controllers/StaffController");

router.get("/", getAllStaffs);

router.get("/:id",userToken, getStaffById);

router.post("/", createStaff);

router.patch("/:id", updateStaff);

router.delete("/:id",deleteStaff);

module.exports = router;
