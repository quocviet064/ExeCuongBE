const express = require("express");
const { fileUpload } = require("../controller/upload.controller");
const uploader = require("../middleware/uploder");

const router = express.Router();

/**
 * @swagger
 * /api/upload/single:
 *   post:
 *     summary: Upload a single file
 *     description: Upload a single file to the server.
 *     tags:
 *       - File Upload
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The file to upload.
 *     responses:
 *       200:
 *         description: File uploaded successfully.
 *       400:
 *         description: Failed to upload file.
 */
router.post("/single", uploader.single("file"), fileUpload);

module.exports = router;
