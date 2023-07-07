const Order = require('../models/order');

exports.createOrder = (req, res) => {
  const formData = req.body; // Form data sent from the client

  // Create a new document using the Order model
  const newOrder = new Order(formData);

  // Save the document to the database
  newOrder.save((err, order) => {
    if (err) {
      console.error('Error saving order:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json({ message: 'Order saved successfully', order });
    }
  });
};

exports.getAllOrders = (req, res) => {
  // Find all orders in the database
  Order.find({}, (err, orders) => {
    if (err) {
      console.error('Error fetching orders:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json({ orders });
    }
  });
};
