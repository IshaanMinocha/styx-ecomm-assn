import express from 'express';
import { addProduct, getProducts, getProductById } from '../controllers/ProductController.js';
import { protect, admin } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router.route('/').post(protect, admin, addProduct).get(getProducts);
router.route('/:id').get(getProductById);

export default router;
