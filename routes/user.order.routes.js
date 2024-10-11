const express = require("express");
const router = express.Router();
const userOrderController = require("../controller/user.order.controller");
const verifyToken = require("../middleware/verifyToken");

/**
 * @swagger
 * /api/user-order/dashboard-amount:
 *   get:
 *     summary: Get dashboard amount
 *     description: Retrieve total sales amount for the dashboard, including today's, yesterday's, and monthly totals.
 *     tags:
 *       - User Orders
 *     responses:
 *       200:
 *         description: Dashboard amounts retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 todayOrderAmount:
 *                   type: number
 *                 yesterdayOrderAmount:
 *                   type: number
 *                 monthlyOrderAmount:
 *                   type: number
 *                 totalOrderAmount:
 *                   type: number
 *                 todayCardPaymentAmount:
 *                   type: number
 *                 todayCashPaymentAmount:
 *                   type: number
 *                 yesterDayCardPaymentAmount:
 *                   type: number
 *                 yesterDayCashPaymentAmount:
 *                   type: number
 *       500:
 *         description: Internal server error.
 */
router.get("/dashboard-amount", userOrderController.getDashboardAmount);

/**
 * @swagger
 * /api/user-order/sales-report:
 *   get:
 *     summary: Get sales report
 *     description: Retrieve the sales report for the last 7 days.
 *     tags:
 *       - User Orders
 *     responses:
 *       200:
 *         description: Sales report retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 salesReport:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       date:
 *                         type: string
 *                         example: "2023-09-22"
 *                       total:
 *                         type: number
 *                       order:
 *                         type: number
 *       500:
 *         description: Internal server error.
 */
router.get("/sales-report", userOrderController.getSalesReport);

/**
 * @swagger
 * /api/user-order/most-selling-category:
 *   get:
 *     summary: Get most selling category
 *     description: Retrieve the top 5 most selling product categories.
 *     tags:
 *       - User Orders
 *     responses:
 *       200:
 *         description: Most selling categories retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 categoryData:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       count:
 *                         type: number
 *       500:
 *         description: Internal server error.
 */
router.get("/most-selling-category", userOrderController.mostSellingCategory);

/**
 * @swagger
 * /api/user-order/dashboard-recent-order:
 *   get:
 *     summary: Get dashboard recent orders
 *     description: Retrieve recent orders for the dashboard, including pagination options.
 *     tags:
 *       - User Orders
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit number of results per page.
 *     responses:
 *       200:
 *         description: Recent orders retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       invoice:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                       paymentMethod:
 *                         type: string
 *                       totalAmount:
 *                         type: number
 *                       status:
 *                         type: string
 *       500:
 *         description: Internal server error.
 */
router.get(
  "/dashboard-recent-order",
  userOrderController.getDashboardRecentOrder
);

/**
 * @swagger
 * /api/user-order/{id}:
 *   get:
 *     summary: Get order by ID
 *     description: Retrieve a specific order by its ID.
 *     tags:
 *       - User Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 order:
 *                   type: object
 *       404:
 *         description: Order not found.
 */
router.get("/:id", userOrderController.getOrderById);

/**
 * @swagger
 * /api/user-order/:
 *   get:
 *     summary: Get orders by user
 *     description: Retrieve all orders for a specific user. Requires authentication.
 *     tags:
 *       - User Orders
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit number of results per page.
 *     responses:
 *       200:
 *         description: Orders retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     type: object
 *                 pending:
 *                   type: number
 *                 processing:
 *                   type: number
 *                 delivered:
 *                   type: number
 *                 totalDoc:
 *                   type: number
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal server error.
 */
router.get("/", verifyToken, userOrderController.getOrderByUser);

module.exports = router;
