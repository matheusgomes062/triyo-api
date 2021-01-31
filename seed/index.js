const { sequelize, User, Dependent } = require('../src/models');

const Promise = require('bluebird');
const users = require('./users.json');
const dependents = require('./dependents.json');

sequelize.sync({ force: true }).then(async function () {
  await Promise.all(
    users.map((user) => {
      User.create(user);
    })
  );

  await Promise.all(
    dependents.map((dependent) => {
      Dependent.create(dependent);
    })
  );
});
