const express = require("express");
const router = express.Router();
const {
  addAddress,
  getAddressById,
  getAllAddresses,
  updateAddress,
  deleteAddress,
} = require("../controller/address.controller");

/**
 * @swagger
 * /api/address/add:
 *   post:
 *     summary: Add a new address
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               title:
 *                 type: string
 *               address_line_1:
 *                 type: string
 *               address_line_2:
 *                 type: string
 *               country:
 *                 type: string
 *               city:
 *                 type: string
 *               postal_code:
 *                 type: string
 *               phone_number:
 *                 type: string
 *     responses:
 *       201:
 *         description: Address added successfully
 *       400:
 *         description: Bad request
 */
router.post("/add", addAddress);

/**
 * @swagger
 * /api/address/all:
 *   get:
 *     summary: Get all addresses
 *     tags: [Address]
 *     responses:
 *       200:
 *         description: A list of addresses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   user_id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   address_line_1:
 *                     type: string
 *                   country:
 *                     type: string
 *                   city:
 *                     type: string
 *                   postal_code:
 *                     type: string
 *                   phone_number:
 *                     type: string
 */
router.get("/all", getAllAddresses);

/**
 * @swagger
 * /api/address/{id}:
 *   get:
 *     summary: Get address by ID
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Address ID
 *     responses:
 *       200:
 *         description: Address data
 *       404:
 *         description: Address not found
 */
router.get("/:id", getAddressById);

/**
 * @swagger
 * /api/address/update/{id}:
 *   patch:
 *     summary: Update address information
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Address ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               address_line_1:
 *                 type: string
 *               address_line_2:
 *                 type: string
 *               country:
 *                 type: string
 *               city:
 *                 type: string
 *               postal_code:
 *                 type: string
 *               phone_number:
 *                 type: string
 *     responses:
 *       200:
 *         description: Address updated successfully
 *       400:
 *         description: Bad request
 */
router.patch("/update/:id", updateAddress);

/**
 * @swagger
 * /api/address/{id}:
 *   delete:
 *     summary: Delete an address
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Address ID
 *     responses:
 *       200:
 *         description: Address deleted successfully
 *       404:
 *         description: Address not found
 */
router.delete("/:id", deleteAddress);

module.exports = router;
