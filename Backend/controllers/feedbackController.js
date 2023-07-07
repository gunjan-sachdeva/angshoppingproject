const Feedback = require('../models/feedback');

// Create a new feedback
exports.createFeedback = (req, res) => {
  const feedback = new Feedback({
    name: req.body.name,
    email: req.body.email,
    orderNumber: req.body.orderNumber,
    subject: req.body.subject,
    message: req.body.message
  });

  feedback.save()
    .then(() => {
      res.status(201).json({ message: 'Feedback created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Get all feedback
exports.getAllFeedback = (req, res) => {
  Feedback.find()
    .then((feedback) => {
      res.status(200).json(feedback);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
