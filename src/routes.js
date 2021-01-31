const ClientController = require('./controllers/ClientController');
// const RegisterClientPolicy = require('./policies/RegisterClientPolicy');

module.exports = (app) => {
  app.post(
    '/registerClient',
    // RegisterClientPolicy.register,
    ClientController.register
  );
  app.get('/clients', ClientController.index);
};
