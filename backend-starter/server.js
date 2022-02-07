const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');

//Configure dotenv
dotenv.config();
//Initialize Express
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  res.json(products.find((p) => p._id === req.params.id));
});

//Start server
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} MODE on PORT ${5000}`)
);
