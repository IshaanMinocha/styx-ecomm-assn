import express from 'express';
import { getMyOrders, getOrderById, updateOrderStatus } from '../controllers/OrderController.js';
import { protect, admin } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, admin, getOrderById);
router.route('/:id/status').put(protect, admin, updateOrderStatus);

export default router;
