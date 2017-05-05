const { Schema } = require('mongoose');
const createdAt = require('../schema_middlewares/createdAt');

const schema = Schema({
  _id: String,
  name: String,
});

schema.plugin(createdAt);

module.exports = schema;
