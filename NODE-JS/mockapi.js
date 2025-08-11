// Day 11 - Mock JSON API

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

// Mock database (in memory)
let users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST - add a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  users.push(newUser);
  res.json({
    message: 'New user added!',
    user: newUser
  });
});

// GET single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Mock JSON API running at http://localhost:3000');
});