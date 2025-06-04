const mongoose = require('mongoose');

const trialSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
}, { timestamps: true });

const Trial = mongoose.model('Trial', trialSchema);

module.exports = Trial;
