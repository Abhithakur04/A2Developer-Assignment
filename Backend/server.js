const dotenv = require('dotenv');
dotenv.config(); 

const express = require('express');
const cors = require('cors');

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';  
const PORT = process.env.PORT || 5000;

const connectDB = require("./configure/db");
const trialRoutes = require('./routes/trialRoutes.js');

const app = express();

// CORS setup
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());

app.use('/', trialRoutes);

connectDB()
  .then(() => {
    console.log("Successfully connected to database");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error! Database cannot connect");
  });
