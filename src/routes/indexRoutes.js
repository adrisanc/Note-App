const express = require("express");
const mainController = require("../controllers/mainController")
const router = express.Router();

router.get('/', mainController.home);
router.post('/tasks/add', mainController.createTask);
router.get('/edit/:id', mainController.edit);
router.post('/edit/:id', mainController.saveEdition)
router.get('/delete/:id', mainController.delete);
router.get('/toggleDone/:id', mainController.done);
router.get('/deleteAll', mainController.deletAllDone);
module.exports = router