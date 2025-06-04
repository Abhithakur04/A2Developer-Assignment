const express = require('express');
const { submitTrial } = require('../controllers/trialController');

const router = express.Router();

router.post('/', submitTrial);

module.exports = router;

