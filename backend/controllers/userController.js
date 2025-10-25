const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  res.json(User.getAll());
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }
  const user = User.create({ name, email });
  res.status(201).json(user);
};