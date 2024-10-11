const express = require("express");
const router = express.Router();
// internal
const brandController = require("../controller/brand.controller");

/**
 * @swagger
 * /api/brand/add:
 *   post:
 *     summary: Add a new brand
 *     tags: [Brand]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Brand name
 *               description:
 *                 type: string
 *                 description: Brand description
 *               logo:
 *                 type: string
 *                 description: URL of the brand's logo
 *               email:
 *                 type: string
 *                 description: Brand's contact email
 *               website:
 *                 type: string
 *                 description: Brand's website URL
 *               location:
 *                 type: string
 *                 description: Brand's location
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *                 description: Brand's status
 *     responses:
 *       201:
 *         description: Brand added successfully
 *       400:
 *         description: Bad request
 */
router.post("/add", brandController.addBrand);

/**
 * @swagger
 * /api/brand/add-all:
 *   post:
 *     summary: Add multiple brands
 *     tags: [Brand]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Brand name
 *                 description:
 *                   type: string
 *                   description: Brand description
 *                 logo:
 *                   type: string
 *                   description: URL of the brand's logo
 *                 email:
 *                   type: string
 *                   description: Brand's contact email
 *                 website:
 *                   type: string
 *                   description: Brand's website URL
 *                 location:
 *                   type: string
 *                   description: Brand's location
 *                 status:
 *                   type: string
 *                   enum: [active, inactive]
 *                   description: Brand's status
 *     responses:
 *       201:
 *         description: Brands added successfully
 *       400:
 *         description: Bad request
 */
router.post("/add-all", brandController.addAllBrand);

/**
 * @swagger
 * /api/brand/active:
 *   get:
 *     summary: Get all active brands
 *     tags: [Brand]
 *     responses:
 *       200:
 *         description: A list of active brands
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                     description: Brand name
 *                   description:
 *                     type: string
 *                     description: Brand description
 *                   logo:
 *                     type: string
 *                     description: URL of the brand's logo
 *                   email:
 *                     type: string
 *                     description: Brand's contact email
 *                   website:
 *                     type: string
 *                     description: Brand's website URL
 *                   location:
 *                     type: string
 *                     description: Brand's location
 *                   status:
 *                     type: string
 *                     enum: [active, inactive]
 *                     description: Brand's status
 */
router.get("/active", brandController.getActiveBrands);

/**
 * @swagger
 * /api/brand/all:
 *   get:
 *     summary: Get all brands
 *     tags: [Brand]
 *     responses:
 *       200:
 *         description: A list of all brands
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                     description: Brand name
 *                   description:
 *                     type: string
 *                     description: Brand description
 *                   logo:
 *                     type: string
 *                     description: URL of the brand's logo
 *                   email:
 *                     type: string
 *                     description: Brand's contact email
 *                   website:
 *                     type: string
 *                     description: Brand's website URL
 *                   location:
 *                     type: string
 *                     description: Brand's location
 *                   status:
 *                     type: string
 *                     enum: [active, inactive]
 *                     description: Brand's status
 */
router.get("/all", brandController.getAllBrands);

/**
 * @swagger
 * /api/brand/delete/{id}:
 *   delete:
 *     summary: Delete a brand by ID
 *     tags: [Brand]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Brand ID
 *     responses:
 *       200:
 *         description: Brand deleted successfully
 *       404:
 *         description: Brand not found
 */
router.delete("/delete/:id", brandController.deleteBrand);

/**
 * @swagger
 * /api/brand/get/{id}:
 *   get:
 *     summary: Get a single brand by ID
 *     tags: [Brand]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Brand ID
 *     responses:
 *       200:
 *         description: Brand details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 logo:
 *                   type: string
 *                   description: URL of the brand's logo
 *                 email:
 *                   type: string
 *                   description: Brand's contact email
 *                 website:
 *                   type: string
 *                   description: Brand's website URL
 *                 location:
 *                   type: string
 *                 status:
 *                   type: string
 *                   enum: [active, inactive]
 *       404:
 *         description: Brand not found
 */
router.get("/get/:id", brandController.getSingleBrand);

/**
 * @swagger
 * /api/brand/edit/{id}:
 *   patch:
 *     summary: Update a brand by ID
 *     tags: [Brand]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Brand ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               logo:
 *                 type: string
 *                 description: URL of the brand's logo
 *               email:
 *                 type: string
 *                 description: Brand's contact email
 *               website:
 *                 type: string
 *                 description: Brand's website URL
 *               location:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *     responses:
 *       200:
 *         description: Brand updated successfully
 *       404:
 *         description: Brand not found
 */
router.patch("/edit/:id", brandController.updateBrand);

module.exports = router;
