const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const mongoose = require('koa-mongoose');
const json = require('koa-json');
const Nuxt = require('nuxt');

const config = require('./nuxt.config.js');
const genericCRUD = require('./server/generic.js');

const app = new Koa();
const router = new KoaRouter();
config.dev = !(app.env === 'production');

const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
  nuxt.build()
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
}

app.use(mongoose({
  username: '',
  password: '',
  host: '127.0.0.1',
  port: 27017,
  database: 'babyfoo',
  schemas: `${__dirname}/schemas`,
  db: {
    native_parser: true,
  },
  server: {
    poolSize: 5,
  },
}));

app.use(json());
app.use(koaBody());
router.use('/api/users', genericCRUD('User'));
router.use('/api/scores', genericCRUD('Score'));

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  ctx.status = 200; // koa defaults to 404 when it sees that status is unset
  await nuxt.render(ctx.req, ctx.res);
});

app.listen(3000);
