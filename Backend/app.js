const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const seriesRoutes = require("./routers/seriesRoutes");

dotenv.config();
const app = express();

//MIDDLEWARES

app.use(express.json());
app.use(morgan("dev"));
app.use("/routers/seriesRoutes", seriesRoutes);

//ROUTES

module.exports = app;
