const { sequelize, Client, Dependent } = require('../src/models');

const Promise = require('bluebird');
const clients = require('./clients.json');
const dependents = require('./dependents.json');

sequelize.sync({ force: true }).then(async function () {
  await Promise.all(
    clients.map((client) => {
      Client.create(client);
    })
  );

  await Promise.all(
    dependents.map((dependent) => {
      Dependent.create(dependent);
    })
  );
});
