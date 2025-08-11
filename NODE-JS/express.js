// Day 10 - Express.js Server with GET & POST routes

// 1. Import Express
const express = require('express');
const app = express();

// 2. Middleware to parse JSON data from requests
app.use(express.json());

// 3. GET Route - When user visits http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello from GET route! This is Day 10 Express.js.');
});

// 4. POST Route - When user sends data to http://localhost:3000/submit
app.post('/submit', (req, res) => {
  const userData = req.body; // Access the JSON data sent in the request body
  res.json({
    message: 'POST request received successfully!',
    data: userData
  });
});

// 5. Start server on port 3000
app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000');
});
