// require the library
const express = require('express');
const router = express.Router();

// require homeController from controller folder
const homeController = require('../controllers/home_controller');
console.log("router loaded");
router.get('/' , homeController.home);

// require actions 
router.use('/action' , require('./action'))

module.exports = router;