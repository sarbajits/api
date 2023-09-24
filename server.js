// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a simple endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
