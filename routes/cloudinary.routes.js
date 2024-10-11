const express = require("express");
const router = express.Router();
// internal
const uploader = require("../middleware/uploder");
const { cloudinaryController } = require("../controller/cloudinary.controller");
const multer = require("multer");

const upload = multer();

/**
 * @swagger
 * /api/cloudinary/add-img:
 *   post:
 *     summary: Upload a single image to Cloudinary
 *     tags: [Cloudinary]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file to upload
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *       400:
 *         description: Bad request, image upload failed
 */
router.post(
  "/add-img",
  upload.single("image"),
  cloudinaryController.saveImageCloudinary
);

/**
 * @swagger
 * /api/cloudinary/add-multiple-img:
 *   post:
 *     summary: Upload multiple images to Cloudinary (up to 5)
 *     tags: [Cloudinary]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: An array of images to upload
 *     responses:
 *       200:
 *         description: Images uploaded successfully
 *       400:
 *         description: Bad request, image upload failed
 */
router.post(
  "/add-multiple-img",
  upload.array("images", 5),
  cloudinaryController.addMultipleImageCloudinary
);

/**
 * @swagger
 * /api/cloudinary/img-delete:
 *   delete:
 *     summary: Delete an image from Cloudinary by ID
 *     tags: [Cloudinary]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               public_id:
 *                 type: string
 *                 description: The public ID of the image to delete from Cloudinary
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *       404:
 *         description: Image not found
 */
router.delete("/img-delete", cloudinaryController.cloudinaryDeleteController);

module.exports = router;
