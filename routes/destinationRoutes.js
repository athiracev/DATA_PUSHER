const express = require('express');
const router = express.Router();
const controller = require('../controllers/destinationController');

router.post('/:accountId', controller.createDestination);
router.get('/:accountId', controller.getDestinationsByAccount);

module.exports = router;
