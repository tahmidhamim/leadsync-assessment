const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const campaignRoutes = require('./routes/campaignRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/campaigns', campaignRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error('DB connection failed', err));