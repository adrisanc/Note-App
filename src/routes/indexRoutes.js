const express = require("express");
const mainController = require("../controllers/mainController")
const router = express.Router();

router.get('/', mainController.home);
router.post('/tasks/add', mainController.createTask);
router.get('/edit/:id', mainController.edit);
router.post('/edit/:id', mainController.saveEdition)

module.exports = router