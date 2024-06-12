const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();
const port = process.env.PORT || 5000;

//this is built in middleware (request json body identifier)
app.use(express.json());

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use(errorHandler);
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("waruna");
});
