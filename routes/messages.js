const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/', messageController.getAllMessages);
router.get('/:id', messageController.getMessageById);

router.post('/', messageController.createMessage);
router.put('/:id', messageController.updateMessage);

module.exports = router;