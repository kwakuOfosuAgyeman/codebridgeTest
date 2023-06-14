const express = require('express');
const dogController = require('../controllers/dogController');

const router = express.Router();

router.get('/ping', dogController.ping);
router.get('/dogs', dogController.getDogs);
router.post('/dog', dogController.createDog);

module.exports = router;
