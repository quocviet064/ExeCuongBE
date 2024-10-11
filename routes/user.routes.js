const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: User's full name
 *           minLength: 3
 *           maxLength: 100
 *         email:
 *           type: string
 *           description: User's email
 *         password:
 *           type: string
 *           description: User's password
 *           minLength: 6
 *         birthDate:
 *           type: string
 *           format: date
 *           description: User's birthdate (optional)
 *         avatar:
 *           type: string
 *           description: User's avatar image URL (optional)
 *         contactNumber:
 *           type: string
 *           description: User's contact number
 *         shippingAddress:
 *           type: string
 *           description: User's shipping address (optional)
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           default: user
 *         bio:
 *           type: string
 *           description: User's bio (optional, max 500 characters)
 *         status:
 *           type: string
 *           enum: [active, inactive, blocked]
 *           default: inactive
 *         reviews:
 *           type: array
 *           items:
 *             type: string
 *             description: Review IDs associated with the user
 */

/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user account with signup information.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input or missing required fields
 */
router.post("/signup", userController.signup);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User login
 *     description: Authenticate a user and return a token.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email
 *               password:
 *                 type: string
 *                 description: User's password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/login", userController.login);

/**
 * @swagger
 * /api/user/forget-password:
 *   patch:
 *     summary: Forget password
 *     description: Send a reset password link to the user's email.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email
 *     responses:
 *       200:
 *         description: Reset link sent successfully
 *       404:
 *         description: User not found
 */
router.patch("/forget-password", userController.forgetPassword);

/**
 * @swagger
 * /api/user/confirm-forget-password:
 *   patch:
 *     summary: Confirm forget password
 *     description: Confirm the reset password process and update the password.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: Password reset token
 *               newPassword:
 *                 type: string
 *                 description: New password
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Invalid or expired token
 */
router.patch("/confirm-forget-password", userController.confirmForgetPassword);

/**
 * @swagger
 * /api/user/change-password:
 *   patch:
 *     summary: Change password
 *     description: Change the current password for an authenticated user.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 description: Current password of the user
 *               newPassword:
 *                 type: string
 *                 description: New password to be set
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid current password
 */
router.patch("/change-password", userController.changePassword);

/**
 * @swagger
 * /api/user/confirmEmail/{token}:
 *   get:
 *     summary: Confirm user email
 *     description: Confirm a user's email address with a verification token.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Email confirmation token
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email confirmed successfully
 *       400:
 *         description: Invalid or expired token
 */
router.get("/confirmEmail/:token", userController.confirmEmail);

/**
 * @swagger
 * /api/user/update-user/{id}:
 *   put:
 *     summary: Update user profile
 *     description: Update a user's profile information.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
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
 *               birthDate:
 *                 type: string
 *                 format: date
 *               avatar:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input or missing required fields
 */
router.put("/update-user/:id", userController.updateUser);

/**
 * @swagger
 * /api/user/register/{token}:
 *   post:
 *     summary: Register or login with Google
 *     description: Register or login a user using Google OAuth token.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Google OAuth token
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User registered or logged in successfully
 *       400:
 *         description: Invalid token
 */
router.post("/register/:token", userController.signUpWithProvider);

module.exports = router;
