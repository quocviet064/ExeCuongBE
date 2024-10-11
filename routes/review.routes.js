const express = require("express");
const router = express.Router();
const { addReview, deleteReviews } = require("../controller/review.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - productId
 *         - userId
 *         - rating
 *       properties:
 *         productId:
 *           type: string
 *           description: The ID of the product being reviewed.
 *         userId:
 *           type: string
 *           description: The ID of the user adding the review.
 *         rating:
 *           type: number
 *           description: Rating score between 1 to 5.
 *           minimum: 1
 *           maximum: 5
 *         comment:
 *           type: string
 *           description: Review comment (optional).
 */

/**
 * @swagger
 * /api/review/add:
 *   post:
 *     summary: Add a new review
 *     description: Add a new review to a product.
 *     tags:
 *       - Reviews
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       201:
 *         description: Review added successfully.
 *       400:
 *         description: Invalid input or missing required fields.
 */
router.post("/add", addReview);

/**
 * @swagger
 * /api/review/delete/{id}:
 *   delete:
 *     summary: Delete a review
 *     description: Delete a review by its ID.
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the review to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted successfully.
 *       404:
 *         description: Review not found.
 */
router.delete("/delete/:id", deleteReviews);

module.exports = router;
