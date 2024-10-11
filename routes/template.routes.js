const express = require("express");
const router = express.Router();
const templateController = require("../controller/template.controller");
const { check, validationResult } = require('express-validator');
/**
 * @swagger
 * components:
 *   schemas:
 *     Template:
 *       type: object
 *       required:
 *         - name
 *         - area
 *         - locationType
 *         - imageURl
 *         - vibe
 *         
 *       properties:
 *         sku:
 *           type: string
 *           description: Stock Keeping Unit of the template.   
 *         name:
 *           type: string
 *           description: The name of the template.   
 *         area:
 *           type: number
 *           description: The total area of the template.
 *         locationType:
 *           type: string
 *           description: The type of the template.
 *         imageURl:
 *           type: string
 *           description: The image of the template.         
 *         vibe:
 *           type: string
 *           description: The overall vibe the template gives.     
 *         plants:
 *           type: array
 *           items:
 *             type: string
 *             format: objectId
 *             description: Product ID.
 */

/**
 * @swagger
 * /api/template/all:
 *   get:
 *     summary: View all existed new template
 *     tags:
 *       - Templates
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:           
 *     responses:
 *       201:
 *         description: Get all templates successfully.
 */
router.get("/all", templateController.getAllTemplates);

/**
 * @swagger
 * /api/template/filterByPrice:
 *   get:
 *     summary: Filter templates by price
 *     description: Filter templates by price range
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: query
 *         name: price1
 *         required: true
 *         description: The minimum price
 *         schema:
 *           type: number
 *       - in: query
 *         name: price2
 *         required: true
 *         description: The maximum price
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Filtered templates
 */
router.get("/filterByPrice", [
    check('price1').not().isEmpty().withMessage('Price 1 is required'),
    check('price2').not().isEmpty().withMessage('Price 2 is required'),
    check('price1').isNumeric().withMessage('Price 1 must be a number'),
    check('price2').isNumeric().withMessage('Price 2 must be a number'),
  ], templateController.filterByPrice);

/**
 * @swagger
 * /api/template/filterByArea:
 *   get:
 *     summary: Filter templates by area
 *     description: Filter templates by area range
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: query
 *         name: area1
 *         required: true
 *         description: The minimum area
 *         schema:
 *           type: number
 *       - in: query
 *         name: area2
 *         required: true
 *         description: The maximum area
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Filtered templates
 */
router.get("/filterByArea", [
    check('area1').not().isEmpty().withMessage('Area 1 is required'),
    check('area2').not().isEmpty().withMessage('Area 2 is required'),
    check('area1').isNumeric().withMessage('Area 1 must be a number'),
    check('area2').isNumeric().withMessage('Area 2 must be a number'),
  ], templateController.filterByArea);

/**
 * @swagger
 * /api/template/filterByLocationType:
 *   get:
 *     summary: Filter templates by location type
 *     description: Filter templates by location type
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: query
 *         name: locationType
 *         required: true
 *         description: The location type
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filtered templates
 */
router.get("/filterByLocationType", [
    check('locationType').not().isEmpty().withMessage('Location type is required'),
  ], templateController.filterByLocationType);

/**
 * @swagger
 * /api/template/filterByVibe:
 *   get:
 *     summary: Filter templates by vibe
 *     description: Filter templates by vibe
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: query
 *         name: vibe
 *         required: true
 *         description: The vibe
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filtered templates
 */
router.get("/filterByVibe", [
    check('vibe').not().isEmpty().withMessage('Vibe is required'),
  ], templateController.filterByVibe);

/**
 * @swagger
 * /api/template/add:
 *   post:
 *     summary: Add a new template
 *     description: Add a single template to the store.
 *     tags:
 *       - Templates
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Template'
 *     responses:
 *       201:
 *         description: Template added successfully.
 */
router.post("/add", [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('area').not().isEmpty().withMessage('Area is required'),
    check('locationType').not().isEmpty().withMessage('Location type is required'),
    check('vibe').not().isEmpty().withMessage('Vibe is required'),
    check('imageURl').isURL().withMessage('Please provide a valid URL'),
  ], templateController.addTemplate);




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
router.get("/single-product/:id", templateController.getSingleProduct);


/**
 * @swagger
 * /api/template/updateTemplate/{id}:
 *   patch:
 *     summary: Update a template
 *     description: Update the details of a specific template by ID.
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The template ID.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Template'
 *     responses:
 *       200:
 *         description: Template updated successfully.
 */
router.patch("/updateTemplate/:id", templateController.updateTemplate);

/**
 * @swagger
 * /api/template/deleteTemplate/{id}:
 *   delete:
 *     summary: Delete a template
 *     description: Delete a specific template by ID.
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The template ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Template deleted successfully.
 */
router.delete("/deleteTemplate/:id", templateController.deleteTemplate);

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
router.delete("/:id", templateController.deleteProduct);

/**
 * @swagger
 * /api/template/single-template/{id}:
 *   get:
 *     summary: View the detail of a template by ID
 *     description: Retrieve detailed information about a specific template.
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The template ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detailed information about the template.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Template'
 */
router.get("/single-template/:id", templateController.getSingleTemplate);

module.exports = router;
