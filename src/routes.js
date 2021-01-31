const RegisterClientController = require('./controllers/RegisterClientController');
const RegisterClientPolicy = require('./policies/RegisterClientPolicy');

module.exports = (app) => {
  app.post(
    '/registerClient',
    RegisterClientPolicy.register,
    RegisterClientController.register
  );
};
