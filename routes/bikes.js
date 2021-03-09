const { Router } = require('express');
const controllers = require('../controllers/bikes');

const router = Router();

router.get('/bikes', controllers.getBikes);
router.get('/bikes/:id', controllers.getBike);
router.post('/bikes', controllers.createBike);
router.put('/bikes/:id', controllers.updateBike);
router.delete('/bikes/:id', controllers.deleteBike);

module.exports = router;