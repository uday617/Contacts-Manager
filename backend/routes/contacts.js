const express = require('express');
const Contact = require('../models/Contact.js');

const router = express.Router();

// CREATE
router.post('/', async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    next(new Error('Email already exists'));
  }
});

// READ 
router.get('/', async (req, res) => {
  const search = req.query.search || '';
  const contacts = await Contact.find({
    $or: [
      { name: new RegExp(search, 'i') },
      { email: new RegExp(search, 'i') }
    ]
  }).sort({ name: 1 });

  res.json(contacts);
});

//  UPDATE 
router.put('/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ deleted: true });
});

module.exports = router;
