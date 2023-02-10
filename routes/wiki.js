const express = require('express');
const passport = require('passport');
const router = express.Router();
const wikiController = require('../controller/wiki');

router.get('/history', wikiController.getSearchHistoryByDate);
router.get('/history/:groupBy', wikiController.getSearchHistoryCount);
router.get('/:text', wikiController.search);

module.exports = router

