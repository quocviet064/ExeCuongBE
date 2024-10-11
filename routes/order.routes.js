const express = require("express");
const {
  paymentIntent,
  addOrder,
  getOrders,
  updateOrderStatus,
  getSingleOrder,
  proceedVnPayPayment,
  updateOrderStatusAfterVnPayPayment,
} = require("../controller/order.controller");

// router
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *           description: The user ID associated with the order.
 *         cart:
 *           type: array
 *           description: List of items in the cart.
 *           items:
 *             type: object
 *         name:
 *           type: string
 *           description: Customer's name.
 *           example: "John Doe"
 *         address:
 *           type: string
 *           description: Shipping address.
 *           example: "123 Main St, New York, NY"
 *         email:
 *           type: string
 *           description: Customer's email address.
 *           example: "john@example.com"
 *         contact:
 *           type: string
 *           description: Contact phone number.
 *           example: "+1234567890"
 *         city:
 *           type: string
 *           description: City of the shipping address.
 *           example: "New York"
 *         country:
 *           type: string
 *           description: Country of the shipping address.
 *           example: "USA"
 *         zipCode:
 *           type: string
 *           description: ZIP code for the shipping address.
 *           example: "10001"
 *         subTotal:
 *           type: number
 *           description: Subtotal amount of the order.
 *           example: 100.0
 *         shippingCost:
 *           type: number
 *           description: Shipping cost for the order.
 *           example: 10.0
 *         discount:
 *           type: number
 *           description: Discount applied to the order.
 *           example: 5.0
 *         totalAmount:
 *           type: number
 *           description: Total amount after discount and shipping cost.
 *           example: 105.0
 *         shippingOption:
 *           type: string
 *           description: Chosen shipping option.
 *           example: "Standard"
 *         cardInfo:
 *           type: object
 *           description: Payment card information.
 *         paymentIntent:
 *           type: object
 *           description: Payment intent information (e.g., Stripe).
 *         paymentMethod:
 *           type: string
 *           description: Payment method used for the order.
 *           example: "Credit Card"
 *         orderNote:
 *           type: string
 *           description: Optional note for the order.
 *         invoice:
 *           type: number
 *           description: Unique invoice number.
 *           example: 1001
 *         status:
 *           type: string
 *           enum: ["pending", "processing", "delivered", "cancel"]
 *           description: Current status of the order.
 *           example: "pending"
 */

/**
 * @swagger
 * /api/order/orders:
 *   get:
 *     summary: Get all orders
 *     description: Retrieve a list of all orders.
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: A list of orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get("/orders", getOrders);

/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     summary: Get a single order by ID
 *     description: Retrieve a specific order using its unique ID.
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The order ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found.
 */
router.get("/:id", getSingleOrder);

/**
 * @swagger
 * /api/order/create-payment-intent:
 *   post:
 *     summary: Create a payment intent
 *     description: Create a payment intent for an order.
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 description: The payment amount.
 *                 example: 105.0
 *     responses:
 *       200:
 *         description: Payment intent created successfully.
 */
router.post("/create-payment-intent", paymentIntent);

/**
 * @swagger
 * /api/order/saveOrder:
 *   post:
 *     summary: Save a new order
 *     description: Save an order to the database.
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order saved successfully.
 */
router.post("/saveOrder", addOrder);

/**
 * @swagger
 * /api/order/update-status/{id}:
 *   patch:
 *     summary: Update the order status
 *     description: Update the status of an existing order.
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The order ID.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: The new order status.
 *                 example: "delivered"
 *     responses:
 *       200:
 *         description: Order status updated successfully.
 *       404:
 *         description: Order not found.
 */
router.patch("/update-status/:id", updateOrderStatus);

/**
 * @swagger
 * /api/order/proceed-vnpay-payment:
 *   post:
 *     summary: Proceed with VnPay payment
 *     description: Proceed with VnPay payment for an order.
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *                 description: The order ID.
 *                 example: "645f5c0a2143136895d1f477"
 *     responses:
 *       200:
 *         description: VnPay payment proceeded successfully.
 */
router.post('/proceed-vnpay-payment', proceedVnPayPayment);



module.exports = router;