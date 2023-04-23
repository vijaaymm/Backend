const router = require("express").Router();
const {
    getAllfoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood,
} = require("../controllers/FoodController");

router.get("/", getAllfoods);

router.get("/:id", getFoodById);

router.post("/", createFood);

router.patch("/:id", updateFood);

router.delete("/:id", deleteFood);

module.exports = router;