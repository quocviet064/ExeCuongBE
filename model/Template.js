// models/Template.js
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const templateSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: false
  },

  name: { type: String, required: true },
  price: { type: Number, required: false },
  area: { type: Number, required: true },
  locationType: { type: String, required: true },
  vibe: { type: String},
  imageURl: { type: String, required: true
    // validate: [validator.isURL, "Please provide valid url(s)"],
   },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  plants: [{ type: ObjectId, ref: 'Products' }]
  
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;