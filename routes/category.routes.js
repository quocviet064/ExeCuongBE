const express = require("express");
const router = express.Router();
// internal
const categoryController = require("../controller/category.controller");

/**
 * @swagger
 * /api/category/get/{id}:
 *   get:
 *     summary: Get a single category by ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category
 *     responses:
 *       200:
 *         description: Category found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 parent:
 *                   type: string
 *                   description: The parent category name
 *                 children:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of child categories
 *                 productType:
 *                   type: string
 *                   description: Product type the category is associated with
 *                 description:
 *                   type: string
 *                   description: Description of the category
 *                 status:
 *                   type: string
 *                   enum: [Show, Hide]
 *                   description: Category visibility status
 *       404:
 *         description: Category not found
 */
router.get("/get/:id", categoryController.getSingleCategory);

/**
 * @swagger
 * /api/category/add:
 *   post:
 *     summary: Add a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               parent:
 *                 type: string
 *                 description: Parent category
 *                 example: "Electronics"
 *               children:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of child categories
 *               productType:
 *                 type: string
 *                 description: Product type the category is associated with
 *                 example: "gadgets"
 *               description:
 *                 type: string
 *                 description: Description of the category
 *               img:
 *                 type: string
 *                 description: URL of the category image
 *               status:
 *                 type: string
 *                 enum: [Show, Hide]
 *                 description: Status of the category
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Bad request
 */
router.post("/add", categoryController.addCategory);

/**
 * @swagger
 * /api/category/add-all:
 *   post:
 *     summary: Add multiple categories
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 parent:
 *                   type: string
 *                   description: Parent category
 *                 children:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of child categories
 *                 productType:
 *                   type: string
 *                   description: Product type associated with the category
 *                 description:
 *                   type: string
 *                   description: Category description
 *                 img:
 *                   type: string
 *                   description: URL of the category image
 *                 status:
 *                   type: string
 *                   enum: [Show, Hide]
 *                   description: Status of the category
 *     responses:
 *       201:
 *         description: Categories added successfully
 *       400:
 *         description: Bad request
 */
router.post("/add-all", categoryController.addAllCategory);

/**
 * @swagger
 * /api/category/all:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: A list of all categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   parent:
 *                     type: string
 *                   children:
 *                     type: array
 *                     items:
 *                       type: string
 *                   productType:
 *                     type: string
 *                   description:
 *                     type: string
 *                   status:
 *                     type: string
 *                     enum: [Show, Hide]
 */
router.get("/all", categoryController.getAllCategory);

/**
 * @swagger
 * /api/category/show/{type}:
 *   get:
 *     summary: Get categories by product type
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: The type of products the category is for
 *     responses:
 *       200:
 *         description: A list of categories for the specified product type
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   parent:
 *                     type: string
 *                   children:
 *                     type: array
 *                     items:
 *                       type: string
 *                   productType:
 *                     type: string
 *                   description:
 *                     type: string
 *                   status:
 *                     type: string
 *                     enum: [Show, Hide]
 *       404:
 *         description: Categories not found
 */
router.get("/show/:type", categoryController.getProductTypeCategory);

/**
 * @swagger
 * /api/category/show:
 *   get:
 *     summary: Get categories marked as 'show'
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: A list of categories marked as 'show'
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   parent:
 *                     type: string
 *                   children:
 *                     type: array
 *                     items:
 *                       type: string
 *                   productType:
 *                     type: string
 *                   description:
 *                     type: string
 *                   status:
 *                     type: string
 *                     enum: [Show, Hide]
 */
router.get("/show", categoryController.getShowCategory);

/**
 * @swagger
 * /api/category/delete/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category to delete
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.delete("/delete/:id", categoryController.deleteCategory);

/**
 * @swagger
 * /api/category/edit/{id}:
 *   patch:
 *     summary: Update a category by ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               parent:
 *                 type: string
 *               children:
 *                 type: array
 *                 items:
 *                   type: string
 *               productType:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Show, Hide]
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       404:
 *         description: Category not found
 */
router.patch("/edit/:id", categoryController.updateCategory);

module.exports = router;
