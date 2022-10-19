let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let User = require('../models/user');

let userController = require('../controllers/user');

/* GET Route for the Book List page - READ Operation */
router.get('/', userController.displayUserList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', userController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', userController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', userController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', userController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', userController.performDelete);

module.exports = router;