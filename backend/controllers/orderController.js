import Order from '../models/orderModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

// @desc Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('Add items');
});

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send('Get my orders');
});

// @desc Get order by id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send('Get order by ID');
});

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access Private/Admin
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('Update order to paid');
});

// @desc Update order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('Update order to delivered');
});

// @desc Get all orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send('Get all orders');
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
