const { register } = require('../controllers/RegisterClientController');

const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {};
    const { error, value } = Joi.validate(req.body, schema);

    if (error) {
    } else {
      next();
    }
  }
};
