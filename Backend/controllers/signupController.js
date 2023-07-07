const User = require('../models/user');


exports.signup = (req, res) => {
  const { fname, lname, email, phone, password, address } = req.body;
  const newUser = new User({ fname, lname, email, phone, password, address });

  newUser.save()
    .then(() => {
      res.status(200).json({ message: 'User created successfully' });
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to create user' });
    });
};



exports.getAllUsers = (req, res) => {
  User.find({})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to retrieve users' });
    });
};
