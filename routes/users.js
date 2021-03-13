const { Router } = require('express');
const controllers = require('../controllers/users');

const router = Router();

//auth routes
router.post('/sign-up', controllers.signUp);
router.post('/sign-in', controllers.signIn);
router.get('/verify', controllers.verify);

//assoc routes
router.get('/users', controllers.getUsers);
router.get('./users/:id', controllers.getBikesByUser);

//ambitious?
// router.post('/change-password', controllers.changePassword)

module.exports = router