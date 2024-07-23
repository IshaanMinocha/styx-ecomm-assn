import asyncHandler from 'express-async-handler';
import Order from '../models/OrderModel.js';

const getMyOrders = asyncHandler(async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user._id });
  
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully',
        data: orders,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server error',
        error: error.message,
      });
    }
  });

const getOrderById = asyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (!order) {
      res.status(404).json({
        success: false,
        message: 'Order not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Order details fetched successfully',
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      res.status(404).json({
        success: false,
        message: 'Order not found',
      });
      return;
    }

    order.isPaid = status === 'Paid';
    order.isDelivered = status === 'Delivered';
    await order.save();

    res.status(200).json({
      success: true,
      message: 'Order status updated successfully',
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
});

export { getMyOrders, getOrderById, updateOrderStatus };
