const express = require('express');
const router = express.Router();
const storeController = require('../controllers/store.controller');

// Do work here
router.get('/', storeController.middleware, storeController.homepage);

module.exports = router;
