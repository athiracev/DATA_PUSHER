// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./config/db');

const accountRoutes = require('./routes/accountRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const dataHandlerRoutes = require('./routes/dataHandlerRoutes');

app.use(bodyParser.json());

app.use('/accounts', accountRoutes);
app.use('/destinations', destinationRoutes);
app.use('/server', dataHandlerRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log('SQLite DB & Sequelize synced');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});