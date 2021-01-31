const { Client, Dependent } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      // const clientID = req.client.id;
      // const dependents = await Dependent.findAll({
      //   where: {
      //     ClientID: clientID
      //   },
      //   include: [
      //     {
      //       model: Dependent
      //     }
      //   ],
      //   order: [['createdAt', 'DESC']]
      // })
      //   .map((client) => client.toJSON())
      //   .map((client) => _.extend({}, client.Dependent, client));
      // res.send(_.uniqBy(dependents, (client) => client.DependentID));

      let clients = await Client.findAll();
      res.send(clients);
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the clients'
      });
    }
  },
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
