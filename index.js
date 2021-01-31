const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { restart } = require('nodemon');
const { sequelize } = require('./src/models/index.js');
const config = require('./src/config/config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
const clients = [];

require('./src/routes')(app);

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server started on port ${config.port}`);
});
