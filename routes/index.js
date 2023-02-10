const router = require('express').Router()

router.use('/auth', require('./auth'));
router.use('/wiki', require('./wiki'))

module.exports = router;