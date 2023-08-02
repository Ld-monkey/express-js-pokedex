require('dotenv').config();

const express = require('express');
const router = require('./app/routers');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res) => {
  res.json({ request: 'First request for pokedex !' });
});

app.listen(port, () => {
  console.log(`Pokedex server listening on port ${port}`);
});
