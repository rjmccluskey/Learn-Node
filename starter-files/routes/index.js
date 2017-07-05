const express = require('express');
const router = express.Router();
const storeController = require('../controllers/store.controller');
const {catchErrors} = require('../handlers/errorHandlers');

// Do work here
router.get('/', storeController.getStores);
router.get('/stores', storeController.getStores)
router.get('/add', storeController.addForm);
router.post('/add', catchErrors(storeController.addStore));

module.exports = router;
