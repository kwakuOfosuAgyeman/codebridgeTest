const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Dogshouseservice.Version1.0.1');
});

module.exports = router;
