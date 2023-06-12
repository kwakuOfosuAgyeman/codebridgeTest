const express = require('express');
const router = express.Router();
const Dog = require('../models/dog');


router.post('/', async (req, res) => {

    const { name, color, tail_length, weight } = req.body;
    // console.log(req.body);
  
    try {
      const dog = await Dog.create({ name, color, tail_length, weight });
      res.json(dog);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json('Dog with the same name already exists');
      } else if (error.name === 'SequelizeValidationError') {
        res.status(400).json('Invalid input data');
      } else {
        console.error(error);
        res.status(500).json('Internal Server Error');
      }
    }
  });

  module.exports = router;