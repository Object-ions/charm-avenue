import express from 'express';
const router = express.Router();

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
  getTags,
  getProductsByTag,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/top').get(getTopProducts);
router.route('/tags').get(getTags);
router.route('/tags/:tag').get(getProductsByTag);
router
  .route('/:id')
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);

export default router;
