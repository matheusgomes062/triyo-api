const { Client, Dependent } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      let clients = await Client.findAll();
      res.send(clients);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the clients',
      });
    }
  },
  async register(req, res) {
    try {
      const client = await Client.create(req.body);
      res.send(client.toJSON());
    } catch (err) {
      res.status(400).send({
        error: 'Usuário já adicionado',
      });
    }
  },
};
