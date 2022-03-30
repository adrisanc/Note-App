const express = require("express");
const mainController = require("../controllers/mainController")
const router = express.Router();

router.get('/', mainController.home);
router.post('/tasks/add', mainController.createTask);

module.exports = router