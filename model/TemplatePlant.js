// models/TemplatePlant.js
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const templatePlantSchema = new mongoose.Schema({
  template: { type: ObjectId, ref: 'Template' },
  product: { type: ObjectId, ref: 'Products' },
  quantity: { type: Number, required: true }
});

const TemplatePlant = mongoose.model('TemplatePlant', templatePlantSchema);

module.exports = TemplatePlant;