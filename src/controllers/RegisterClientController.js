const { Client } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const client = await Client.create(req.body);
      res.send(client.toJSON());
    } catch (err) {
      res.status(400).send({
        error: 'Usuário já adicionado'
      });
    }
  }
};
