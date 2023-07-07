const Item = require('../models/item');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();

    res.json(items);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
};
