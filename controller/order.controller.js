const { isObjectIdOrHexString, isValidObjectId, default: mongoose } = require("mongoose");
const { secret } = require("../config/secret");
const stripe = require("stripe")(secret.stripe_key);
const Order = require("../model/Order");
const createPaymentUrl = require('../services/vnpay.service');

// create-payment-intent
exports.paymentIntent = async (req, res, next) => {
  try {
    const product = req.body;
    const price = Number(product.price);
    const amount = price * 100;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: amount,
      payment_method_types: ["card"],
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

exports.proceedVnPayPayment = async (req, res, next) => {
  try {
    const orderId = req.body.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    const amount = order.totalAmount * 100;

    console.log("-------------------------------------------------------" + amount);
    
    try {
      const paymentUrl = createPaymentUrl(orderId, amount);
      res.json({ paymentUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during payment processing' });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// addOrder
exports.addOrder = async (req, res, next) => {
  try {
    const orderItems = await Order.create(req.body);

    res.status(200).json({
      success: true,
      message: "Order added successfully",
      order: orderItems,
    });
  }
  catch (error) {
    console.log(error);
    next(error)
  }
};

// get Orders
exports.getOrders = async (req, res, next) => {
  try {
    const orderItems = await Order.find({}).populate('user');
    res.status(200).json({
      success: true,
      data: orderItems,
    });
  }
  catch (error) {
    console.log(error);
    next(error)
  }
};

// get Orders
exports.getSingleOrder = async (req, res, next) => {
  try {
    const orderItem = await Order.findById(req.params.id).populate('user');
    res.status(200).json(orderItem);
  }
  catch (error) {
    console.log(error);
    next(error)
  }
};

exports.updateOrderStatus = async (req, res) => {
  const newStatus = req.body.status;
  try {
    await Order.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          status: newStatus,
        },
      }, { new: true })
    res.status(200).json({
      success: true,
      message: 'Status updated successfully',
    });
  }
  catch (error) {
    console.log(error);
    next(error)
  }
};

// update order status after VnPay payment
exports.updateOrderStatusAfterVnPayPayment = async (req, res) => {
  try {
    const orderId = req.query.orderId;
    const paymentStatus = req.query.vnp_ResponseCode;

    if (paymentStatus === '00') {
      // Update order status to paid
      await Order.updateOne({ _id: orderId }, { status: 'paid' });
      res.json({ message: 'Payment successful' });
    } else {
      res.json({ message: 'Payment failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during payment processing' });
  }
};