const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design for addresses
const addressSchema = mongoose.Schema(
  {
    user_id: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please provide a title for this address."],
      trim: true,
      minLength: [3, "Title must be at least 3 characters."],
      maxLength: [100, "Title is too long."],
    },
    address_line_1: {
      type: String,
      required: [true, "Address Line 1 is required."],
      trim: true,
      maxLength: [255, "Address Line 1 is too long."],
    },
    address_line_2: {
      type: String,
      required: false,
      trim: true,
      maxLength: [255, "Address Line 2 is too long."],
    },
    country: {
      type: String,
      required: [true, "Country is required."],
      trim: true,
      maxLength: [100, "Country name is too long."],
    },
    city: {
      type: String,
      required: [true, "City is required."],
      trim: true,
      maxLength: [100, "City name is too long."],
    },
    postal_code: {
      type: String,
      required: [true, "Postal code is required."],
      trim: true,
      maxLength: [20, "Postal code is too long."],
    },
    landmark: {
      type: String,
      required: false,
      trim: true,
      maxLength: [255, "Landmark is too long."],
    },
    phone_number: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
      maxLength: [15, "Phone number is too long."],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt timestamps automatically
  }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
