const { Router } = require('express');
const controllers = require('../controllers/bikes');
const restrict = require('../helpers/restrict')

const router = Router();

router.get('/', controllers.getBikes);
router.get('/:id', controllers.getBike);
router.post('/', restrict, controllers.createBike);
router.put('/:id', restrict, controllers.updateBike);
router.delete('/:id', restrict, controllers.deleteBike);

module.exports = router;