const Address = require("../model/Address");

// Add a new address
const addAddress = async (req, res, next) => {
  try {
    const newAddress = new Address({
      user_id: req.body.user_id,
      title: req.body.title,
      address_line_1: req.body.address_line_1,
      address_line_2: req.body.address_line_2,
      country: req.body.country,
      city: req.body.city,
      postal_code: req.body.postal_code,
      landmark: req.body.landmark,
      phone_number: req.body.phone_number,
    });
    const savedAddress = await newAddress.save();
    res.status(201).json({
      message: "Address added successfully",
      data: savedAddress,
    });
  } catch (error) {
    next(error);
  }
};

// Get all addresses
const getAllAddresses = async (req, res, next) => {
  try {
    const addresses = await Address.find({}).sort({ _id: -1 });
    res.status(200).json({
      status: true,
      message: "Addresses retrieved successfully",
      data: addresses,
    });
  } catch (error) {
    next(error);
  }
};

// Get address by ID
const getAddressById = async (req, res, next) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.status(200).json(address);
  } catch (error) {
    next(error);
  }
};

// Update an address
const updateAddress = async (req, res, next) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    address.title = req.body.title || address.title;
    address.address_line_1 = req.body.address_line_1 || address.address_line_1;
    address.address_line_2 = req.body.address_line_2 || address.address_line_2;
    address.country = req.body.country || address.country;
    address.city = req.body.city || address.city;
    address.postal_code = req.body.postal_code || address.postal_code;
    address.landmark = req.body.landmark || address.landmark;
    address.phone_number = req.body.phone_number || address.phone_number;

    const updatedAddress = await address.save();
    res.status(200).json({
      message: "Address updated successfully",
      data: updatedAddress,
    });
  } catch (error) {
    next(error);
  }
};

// Delete an address
const deleteAddress = async (req, res, next) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.status(200).json({
      message: "Address deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addAddress,
  getAddressById,
  getAllAddresses,
  updateAddress,
  deleteAddress,
};
