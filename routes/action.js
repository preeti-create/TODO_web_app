// require the library
const express = require('express');
const router = express.Router();

// require addTaskController from controller folder
const addTaskController = require('../controllers/add_controller');
router.post('/add' , addTaskController.add);

// require deleteTaskController from controller folder
const deleteTaskController = require('../controllers/delete_controller');
router.post('/delete' , deleteTaskController.delete);


module.exports = router;