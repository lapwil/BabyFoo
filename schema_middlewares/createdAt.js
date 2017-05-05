module.exports = function verificationTokenPlugin(schema) {
  schema.add({
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
};
