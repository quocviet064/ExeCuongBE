const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - img
 *         - title
 *         - unit
 *         - parent
 *         - children
 *         - price
 *         - quantity
 *         - category
 *         - status
 *         - productType
 *         - description
 *       properties:
 *         sku:
 *           type: string
 *           description: Stock Keeping Unit of the product.
 *         img:
 *           type: string
 *           description: Primary image URL of the product.
 *         title:
 *           type: string
 *           description: The name/title of the product.
 *         slug:
 *           type: string
 *           description: SEO-friendly URL string of the product.
 *         unit:
 *           type: string
 *           description: Unit of measurement for the product (e.g., kg, pcs).
 *         imageURLs:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               img:
 *                 type: string
 *                 description: Additional image URLs of the product.
 *         parent:
 *           type: string
 *           description: Parent category of the product.
 *         children:
 *           type: string
 *           description: Subcategory/child of the product.
 *         price:
 *           type: number
 *           description: Price of the product.
 *         discount:
 *           type: number
 *           description: Discount on the product.
 *         quantity:
 *           type: number
 *           description: Available stock quantity of the product.
 *         category:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             id:
 *               type: string
 *               description: Category ID.
 *         status:
 *           type: string
 *           enum:
 *             - in-stock
 *             - out-of-stock
 *             - discontinued
 *           description: Stock status of the product.
 *         reviews:
 *           type: array
 *           items:
 *             type: string
 *             description: IDs of product reviews.
 *         productType:
 *           type: string
 *           description: Type of the product.
 *         description:
 *           type: string
 *           description: Detailed description of the product.
 *         videoId:
 *           type: string
 *           description: Optional video ID for the product.
 *         additionalInformation:
 *           type: array
 *           items:
 *             type: object
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags associated with the product.
 *         sizes:
 *           type: array
 *           items:
 *             type: string
 *           description: Available sizes for the product.
 *         offerDate:
 *           type: object
 *           properties:
 *             startDate:
 *               type: string
 *               format: date-time
 *             endDate:
 *               type: string
 *               format: date-time
 *           description: The offer period of the product.
 *         featured:
 *           type: boolean
 *           description: Whether the product is featured.
 *         sellCount:
 *           type: number
 *           description: Number of times the product has been sold.
 */

/**
 * @swagger
 * /api/product/add:
 *   post:
 *     summary: Add a new product
 *     description: Add a single product to the store.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product added successfully.
 */
router.post("/add", productController.addProduct);

/**
 * @swagger
 * /api/product/add-all:
 *   post:
 *     summary: Add multiple products
 *     description: Add an array of products to the store.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Products added successfully.
 */
router.post("/add-all", productController.addAllProducts);

/**
 * @swagger
 * /api/product/all:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of all products.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/all", productController.getAllProducts);

/**
 * @swagger
 * /api/product/offer:
 *   get:
 *     summary: Get products on offer
 *     description: Retrieve products with active offer timers.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of products on offer.
 */
router.get("/offer", productController.getOfferTimerProducts);

/**
 * @swagger
 * /api/product/top-rated:
 *   get:
 *     summary: Get top-rated products
 *     description: Retrieve a list of the top-rated products.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of top-rated products.
 */
router.get("/top-rated", productController.getTopRatedProducts);

/**
 * @swagger
 * /api/product/review-product:
 *   get:
 *     summary: Get products with reviews
 *     description: Retrieve products that have customer reviews.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of reviewed products.
 */
router.get("/review-product", productController.reviewProducts);

/**
 * @swagger
 * /api/product/popular/{type}:
 *   get:
 *     summary: Get popular products by type
 *     description: Retrieve popular products by type (e.g., electronics, clothing).
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         description: The type of products.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of popular products by type.
 */
router.get("/popular/:type", productController.getPopularProductByType);

/**
 * @swagger
 * /api/product/related-product/{id}:
 *   get:
 *     summary: Get related products by product ID
 *     description: Retrieve products related to a specific product.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of related products.
 */
router.get("/related-product/:id", productController.getRelatedProducts);

/**
 * @swagger
 * /api/product/single-product/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     description: Retrieve detailed information about a specific product.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detailed information about the product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.get("/single-product/:id", productController.getSingleProduct);

/**
 * @swagger
 * /api/product/stock-out:
 *   get:
 *     summary: Get products out of stock
 *     description: Retrieve a list of products that are out of stock.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of out-of-stock products.
 */
router.get("/stock-out", productController.stockOutProducts);

/**
 * @swagger
 * /api/product/edit-product/{id}:
 *   patch:
 *     summary: Update a product
 *     description: Update the details of a specific product by ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully.
 */
router.patch("/edit-product/:id", productController.updateProduct);

/**
 * @swagger
 * /api/product/{type}:
 *   get:
 *     summary: Get products by type
 *     description: Retrieve products by type (e.g., electronics, clothing).
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         description: The product type.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of products by type.
 */
router.get("/:type", productController.getProductsByType);

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Delete a specific product by ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 */
router.delete("/:id", productController.deleteProduct);

module.exports = router;
