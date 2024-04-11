const express = require("express");
const router = express.Router();
const {hello} = require("../controller/controller");

router.get("/",hello);

module.exports = router;