const express = require("express");
const seriesController = require("../controller/seriesController");

const router = express.Router();

router.route("/").get(seriesController.getSeries);

module.exports = router;
