const express = require('express');
const router = express.Router();
const Dog = require('../models/dog');

router.get('/', async (req, res) => {
  const { attribute, order, pageNumber, limit } = req.query;

  const sortingAttribute = attribute || 'id';
  const sortingOrder = order === 'desc' ? 'DESC' : 'ASC';
  const offset = (pageNumber - 1) * limit || 0;


  try {
    const dogs = await Dog.findAll({
      order: [[sortingAttribute, sortingOrder]],
      offset,
      limit: limit || 10,
    });

    res.json(dogs);
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal Server Error');
  }
});



module.exports = router;
