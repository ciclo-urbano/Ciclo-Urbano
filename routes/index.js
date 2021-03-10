const { Router } = require('express')
const bikesRouter = require('./bikes');
const usersRouter = require('./users');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
router.use('/bikes', bikesRouter);

module.exports = router