const { Schema } = require('mongoose');
const createdAt = require('../schema_middlewares/createdAt');

const schema = Schema({
  blue: [String],
  red: [String],
  score: {
    red: Number,
    blue: Number,
  },
});

schema.plugin(createdAt);

module.exports = schema;
