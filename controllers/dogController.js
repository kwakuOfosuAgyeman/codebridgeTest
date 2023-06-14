const { Dog } = require('../models/dog');

const ping = (req, res) => {
  res.send('Dogshouseservice v1.0.1');
};

const getDogs = async (req, res) => {
  const { attribute, order, pageNumber = 1, limit = 10 } = req.query;
  const offset = (pageNumber - 1) * limit;

  try {
    const dogs = await Dog.findAll({
      offset,
      limit: parseInt(limit),
      order: attribute ? [[attribute, order || 'ASC']] : undefined,
    });
    res.json(dogs);
  } catch (error) {
    console.error('Error getting dogs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createDog = async (req, res) => {
  const { name, color, tail_length, weight } = req.body;

  try {
    const dog = await Dog.create({ name, color, tail_length, weight });
    res.status(201).json(dog);
  } catch (error) {
    console.error('Error creating dog:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  ping,
  getDogs,
  createDog,
};
