const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'It\'s alive!' });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});