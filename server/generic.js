const KoaRouter = require('koa-router');

module.exports = function generic(modelName) {
  const router = new KoaRouter();
  router.post('/', async (ctx) => {
    const { model, request } = ctx;
    const User = model(modelName);
    const user = new User(request.body);
    await user.save();
    ctx.body = user;
  });
  router.get('/', async (ctx) => {
    const { model } = ctx;
    const User = model(modelName);
    ctx.body = await User.find();
  });
  return router;
};
