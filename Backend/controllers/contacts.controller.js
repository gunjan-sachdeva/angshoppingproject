const express = require('express');
const router = express.Router();
const ContactModel = require('../models/contact.model');

// POST /api/contacts - Create a new contact
router.post('/', (req, res) => {
  const contactData = req.body;

  const newContact = new ContactModel(contactData);

  newContact.save()
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});


router.get('/', (req, res) => {
  ContactModel.find()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = router;
