const Food = require("../models/Food");
const getAllfoods = async (req, res) => {
  try {
    const food = await Food.find();
    console.log(food);
    res.send(food);
  } catch (err) {
    console.log(err);
    res.status(400).send("Server Error");
  }
};

const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.json(food);
  } catch (err) {
    console.log(err);
    res.status(400), send("Server Error");
  }
};

const createFood = async (req, res) => {
  const { 
    day, 
    breakfast, 
    breakfasttiming,
    lunch,
    lunchtiming,
    dinner,
    dinnertiming
    } = req.body;
  try {
    const food = new Food({
        day, 
        breakfast, 
        breakfasttiming,
        lunch,
        lunchtiming,
        dinner,
        dinnertiming
    });
    await food.save();
    res.send(food).send("Created");
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

const updateFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    await food.updateOne();
    res.status(200).send("Updated");
  } catch (err) {
    console.log(err);
    res.status(400), send("Server Error");
  }
};

const deleteFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    await food.deleteOne();
    res.status(200).send("Deleted");
  } catch (err) {
    console.log(err);
    res.status(400), send("Server Error");
  }
};

module.exports = {
    getAllfoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood,
};
