var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');

var contactsController = require('../controllers/contacts.controller');

const feedbackController = require('../controllers/feedbackController');

const signupController = require('../controllers/signupController');

const orderController = require('../controllers/orderController');

const itemController = require('../controllers/itemController');



router.route('/user/getAll').get(userController.getDataConntrollerfn);


router.route('/user/create').post(userController.createUserControllerFn);

router.use('/contacts', contactsController);

router.post('/signup', signupController.signup);


router.get('/signup', signupController.getAllUsers);

router.post('/feedback', feedbackController.createFeedback);

router.get('/feedback', feedbackController.getAllFeedback);


router.post('/orders', orderController.createOrder);

router.get('/orders', orderController.getAllOrders);

router.route('/user/update/:id').patch(userController.updateUserController);

router.route('/user/delete/:id').delete(userController.deleteUserController);

router.get('/api/items', itemController.getAllItems);

module.exports = router;