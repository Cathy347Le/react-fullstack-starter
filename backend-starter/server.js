const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');

//Configure dotenv
dotenv.config();

//Initialize Express
const app = express();

const PORT = process.env.PORT || 5000;

//Start server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} MODE on PORT ${5000}`)
);
