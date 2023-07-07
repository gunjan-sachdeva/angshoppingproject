const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  fname: String,
  pname: String,
  mobile: String,
  email: String,
  message: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
