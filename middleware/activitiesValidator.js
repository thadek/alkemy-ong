const { body } = require('express-validator');

module.exports.create = [
  body('name').notEmpty().isString(),
  body('content').notEmpty().isString(),
  body('image').notEmpty().isString(),

];