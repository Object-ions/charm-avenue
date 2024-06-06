import express from 'express';
const router = express.Router();

import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); // to get all of them we will pass an empty object
    res.json(products);
  })
);

// Get a specific product by ID
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.json(product);
    } else {
      return res.status(404).json({ message: 'Product not found' });
    }
  })
);

export default router;
