const Campaign = require('../models/Campaign');

exports.createCampaign = async (req, res) => {
  const { name, totalLead, inviteSent, connection } = req.body;
  try {
    const newCampaign = new Campaign({ name, totalLead, inviteSent, connection });
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create campaign' });
  }
};

exports.getCampaigns = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;

    const skip = (page - 1) * limit;

    const campaigns = await Campaign.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Campaign.countDocuments();

    res.status(200).json({
      total,
      campaigns,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving campaigns', error });
  }
};