import express from 'express';
import products from './data/products.js';
const port = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  // Finding a specific product
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server is running at ${port}`));
