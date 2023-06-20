var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');





router.route('/user/getAll').get(userController.getDataConntrollerfn);


router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/update/:id').patch(userController.updateUserController);

router.route('/user/delete/:id').delete(userController.deleteUserController);

module.exports = router;