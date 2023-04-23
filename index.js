const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const StudentRoute = require("./routes/Studentroute");
const StaffRoute = require("./routes/StaffRoute");
const FoodRoute = require("./routes/FoodRoute");
const app = express();

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/api/student", StudentRoute);
app.use("/api/staff", StaffRoute);
app.use("/api/food", FoodRoute);
const PORT = process.env.PORT;

const server = app.listen(PORT);
