const koa = require('koa');
const router = require('koa-router');

let server = new koa();
server.listen(8081);

server.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');

    await next();
});

let r = router();

r.get('/list', ctx => {
    ctx.body = [
        {id:1, name: '111', price:345, sales: 124},
        {id:2, name: '222', price:22, sales: 2345},
        {id:3, name: '333', price:56, sales: 5567},
        {id:4, name: '444', price:44, sales: 5553},
        {id:5, name: '5555', price:1235, sales: 234},
        {id:6, name: 'iphone X', price:9888, sales: 234},
    ];
});

server.use(r.routes());
