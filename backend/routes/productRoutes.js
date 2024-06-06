import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    res.json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    // Finding a specific product
    const product = products.find((product) => product._id === req.params.id);
    res.json(product);
  })
);

export default router;
