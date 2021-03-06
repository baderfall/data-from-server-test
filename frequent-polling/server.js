const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');

const frequentPolling = require('./frequent-polling');

const app = new Koa();

app.use(frequentPolling);
app.use(serve(path.resolve(__dirname)));
app.listen(3000);
