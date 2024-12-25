const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['Draft', 'Running', 'Ended'], default: 'Draft' },
  totalLead: { type: Number, required: true },
  inviteSent: { type: Number, required: true },
  connection: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Campaign', campaignSchema);