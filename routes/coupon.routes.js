const express = require("express");
const router = express.Router();
const {
  addCoupon,
  addAllCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon,
} = require("../controller/coupon.controller");

/**
 * @swagger
 * /api/coupon/add:
 *   post:
 *     summary: Add a new coupon
 *     tags: [Coupon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the coupon
 *                 example: "Summer Sale"
 *               logo:
 *                 type: string
 *                 description: The URL of the coupon logo
 *                 example: "https://example.com/logo.png"
 *               couponCode:
 *                 type: string
 *                 description: Coupon code
 *                 example: "SUMMER20"
 *               startTime:
 *                 type: string
 *                 format: date-time
 *                 description: Start time of the coupon
 *                 example: "2023-07-01T00:00:00Z"
 *               endTime:
 *                 type: string
 *                 format: date-time
 *                 description: End time of the coupon
 *                 example: "2023-07-31T23:59:59Z"
 *               discountPercentage:
 *                 type: number
 *                 description: Discount percentage
 *                 example: 20
 *               minimumAmount:
 *                 type: number
 *                 description: Minimum purchase amount for the coupon to be valid
 *                 example: 100
 *               productType:
 *                 type: string
 *                 description: Type of product the coupon applies to
 *                 example: "electronics"
 *               status:
 *                 type: string
 *                 enum: ["active", "inactive"]
 *                 description: Coupon status
 *                 example: "active"
 *     responses:
 *       201:
 *         description: Coupon added successfully
 *       400:
 *         description: Bad request
 */
router.post("/add", addCoupon);

/**
 * @swagger
 * /api/coupon/all:
 *   post:
 *     summary: Add multiple coupons
 *     tags: [Coupon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 logo:
 *                   type: string
 *                 couponCode:
 *                   type: string
 *                 startTime:
 *                   type: string
 *                   format: date-time
 *                 endTime:
 *                   type: string
 *                   format: date-time
 *                 discountPercentage:
 *                   type: number
 *                 minimumAmount:
 *                   type: number
 *                 productType:
 *                   type: string
 *                 status:
 *                   type: string
 *                   enum: ["active", "inactive"]
 *     responses:
 *       201:
 *         description: Coupons added successfully
 *       400:
 *         description: Bad request
 */
router.post("/all", addAllCoupon);

/**
 * @swagger
 * /api/coupon:
 *   get:
 *     summary: Get all coupons
 *     tags: [Coupon]
 *     responses:
 *       200:
 *         description: A list of all coupons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   logo:
 *                     type: string
 *                   couponCode:
 *                     type: string
 *                   startTime:
 *                     type: string
 *                     format: date-time
 *                   endTime:
 *                     type: string
 *                     format: date-time
 *                   discountPercentage:
 *                     type: number
 *                   minimumAmount:
 *                     type: number
 *                   productType:
 *                     type: string
 *                   status:
 *                     type: string
 *                     enum: ["active", "inactive"]
 */
router.get("/", getAllCoupons);

/**
 * @swagger
 * /api/coupon/{id}:
 *   get:
 *     summary: Get a coupon by ID
 *     tags: [Coupon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the coupon
 *     responses:
 *       200:
 *         description: Coupon details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 logo:
 *                   type: string
 *                 couponCode:
 *                   type: string
 *                 startTime:
 *                   type: string
 *                   format: date-time
 *                 endTime:
 *                   type: string
 *                   format: date-time
 *                 discountPercentage:
 *                   type: number
 *                 minimumAmount:
 *                   type: number
 *                 productType:
 *                   type: string
 *                 status:
 *                   type: string
 *                   enum: ["active", "inactive"]
 *       404:
 *         description: Coupon not found
 */
router.get("/:id", getCouponById);

/**
 * @swagger
 * /api/coupon/{id}:
 *   patch:
 *     summary: Update a coupon by ID
 *     tags: [Coupon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the coupon to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               logo:
 *                 type: string
 *               couponCode:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               discountPercentage:
 *                 type: number
 *               minimumAmount:
 *                 type: number
 *               productType:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: ["active", "inactive"]
 *     responses:
 *       200:
 *         description: Coupon updated successfully
 *       404:
 *         description: Coupon not found
 */
router.patch("/:id", updateCoupon);

/**
 * @swagger
 * /api/coupon/{id}:
 *   delete:
 *     summary: Delete a coupon by ID
 *     tags: [Coupon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the coupon to delete
 *     responses:
 *       200:
 *         description: Coupon deleted successfully
 *       404:
 *         description: Coupon not found
 */
router.delete("/:id", deleteCoupon);

module.exports = router;
