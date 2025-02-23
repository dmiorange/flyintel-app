const express = require('express');
const { getFlights } = require('../controllers/flightController');

const router = express.Router();

router.get('/', getFlights);

module.exports = router;