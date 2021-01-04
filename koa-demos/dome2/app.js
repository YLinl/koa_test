// server/index.js
const Koa = require('koa');
const static = require('koa-static');
const router = require('../router/index')

const koaBody = require('koa-body')
const {join}= require('path');

// const { POINT_CONVERSION_COMPRESSED } = require('constants');

const app = new Koa();

app.use(koaBody());
const staticPath = '../static';
app.use(static(
    join(__dirname, staticPath)
));


app.use(router.routes()).use(router.allowedMethods());


app.listen(4455);
console.log('listen at 4455');