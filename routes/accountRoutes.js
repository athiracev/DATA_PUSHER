const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');

router.post('/', controller.createAccount);
router.get('/', controller.getAccounts);
router.get('/:id', controller.getAccountById);
router.put('/:id', controller.updateAccount);
router.delete('/:id', controller.deleteAccount);

module.exports = router;
