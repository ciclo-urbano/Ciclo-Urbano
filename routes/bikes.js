const { Router } = require('express');
const controllers = require('../controllers/bikes');
const restrict = require('../helpers/restrict')

const router = Router();

router.get('/bikes', controllers.getBikes);
router.get('/bikes/:id', controllers.getBike);
router.post('/:userID/bikes', restrict, controllers.createBike);
router.put('/bikes/:id', restrict, controllers.updateBike);
router.delete('/bikes/:id', restrict, controllers.deleteBike);

module.exports = router;