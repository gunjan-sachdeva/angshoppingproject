const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: Number,
  image: String,
  title: String,
  description: String,
  price: Number,
  total: Number,
  rating: String,
  quantity: Number,
  brand: String,
  instock: Boolean
});

const Item = mongoose.model('Item', itemSchema, 'all');

module.exports = Item;
