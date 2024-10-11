const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  updateStaff,
  changePassword,
  addStaff,
  getAllStaff,
  deleteStaff,
  getStaffById,
  forgetPassword,
  confirmAdminEmail,
  confirmAdminForgetPass,
} = require("../controller/admin.controller");

/**
 * @swagger
 * /api/admin/register:
 *   post:
 *     summary: Register a new admin staff
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin registered successfully
 *       400:
 *         description: Bad request
 */
router.post("/register", registerAdmin);

/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     summary: Admin login
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin logged in successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/login", loginAdmin);

/**
 * @swagger
 * /api/admin/change-password:
 *   patch:
 *     summary: Change admin password
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Bad request
 */
router.patch("/change-password", changePassword);

/**
 * @swagger
 * /api/admin/add:
 *   post:
 *     summary: Add a new staff member
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Staff member added successfully
 *       400:
 *         description: Bad request
 */
router.post("/add", addStaff);

/**
 * @swagger
 * /api/admin/all:
 *   get:
 *     summary: Get all staff members
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: A list of staff members
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
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 */
router.get("/all", getAllStaff);

/**
 * @swagger
 * /api/admin/forget-password:
 *   patch:
 *     summary: Admin forget password
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Forget password request successful
 *       400:
 *         description: Bad request
 */
router.patch("/forget-password", forgetPassword);

/**
 * @swagger
 * /api/admin/confirm-forget-password:
 *   patch:
 *     summary: Confirm admin forget password
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset successful
 *       400:
 *         description: Bad request
 */
router.patch("/confirm-forget-password", confirmAdminForgetPass);

/**
 * @swagger
 * /api/admin/get/{id}:
 *   get:
 *     summary: Get staff by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Staff ID
 *     responses:
 *       200:
 *         description: Staff data
 *       404:
 *         description: Staff not found
 */
router.get("/get/:id", getStaffById);

/**
 * @swagger
 * /api/admin/update-stuff/{id}:
 *   patch:
 *     summary: Update staff information
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Staff ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Staff updated successfully
 *       400:
 *         description: Bad request
 */
router.patch("/update-stuff/:id", updateStaff);

//update staf status
// router.put("/update-status/:id", updatedStatus);

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     summary: Delete a staff member
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Staff ID
 *     responses:
 *       200:
 *         description: Staff deleted successfully
 *       404:
 *         description: Staff not found
 */
router.delete("/:id", deleteStaff);

module.exports = router;
