const express = require('express');
const app = express();
const version = process.env.VERSION || 'v1';

app.get('/', (req, res) => {
  res.send(`Hello from ${version}`);
});

app.listen(80, () => {
  console.log(`App running on port 80 - ${version}`);
});

