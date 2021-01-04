const Router = require('koa-router');
const router = new Router();
const {
    query
} = require('../server/db');
module.exports={
    home:async (ctx,next)=>{
        ctx.response.body=`<h1>Home page</h1>`
    },
    article:async(ctx,next)=>{
        ctx.response.body = `<h1>article page</h1>`
    },
    car:async(ctx,next)=>{
        ctx.response.body = `<h1>分类 page</h1>`
    },
    tag:async(ctx,next)=>{
        ctx.response.body = `<h1>tag page</h1>`
    },
    comments:async(ctx,next)=>{
         ctx.response.body = `<h1>comment page</h1>`
    },
    frends:async(ctx,next)=>{
         ctx.response.body = `<h1>frend page</h1>`
    }
}
router.get('/getList', async (ctx, next) => {
    ctx.type = 'Content-Type: application/json;charset=utf-8';
    let result = await query('SELECT * FROM domain;');
    let list = [];
    result.forEach(item => {
        list.push({
            id: item.ID,
            name: item.name,
            status: item.status
        })
    });
    console.log(list);
    ctx.body = {
        code: 200,
        data: list,
        message: 'getList success'
    };
});
router.post('/add', async (ctx, next) => {
    const postData = ctx.request.body;
    console.log('postData：', postData);
    ctx.type = 'Content-Type: application/json;charset=utf-8';
    await query('INSERT INTO domain SET ?', JSON.parse(postData));

    ctx.body = {
        code: 200,
        data: [],
        message: 'add success'
    };
})
router.post('/update', async (ctx, next) => {
    const postData = ctx.request.body;
    const updateData = JSON.parse(postData);
    await query('UPDATE domain SET name = ?, status = ? WHERE id = ?;', [updateData.name, updateData.status, updateData.id]);
    ctx.type = 'Content-Type: application/json;charset = utf-8';
    ctx.body = {
        code: 200,
        data: [],
        message: 'update success'
    }
})
router.post('/delete', async (ctx, next) => {
    ctx.type = 'Content-Type: application/json;charset=utf-8';
    const postData = ctx.request.body;
    console.log('delete postData：', JSON.parse(postData));
    await query('DELETE FROM domain where id=' + JSON.parse(postData).id);

    ctx.body = {
        code: 200,
        data: [],
        message: 'delete success'
    }
});
router.get('/getInfo/:id', async (ctx, next) => {
    ctx.type = 'Content-Type: application/json;charset=utf-8';
    let result = await query('SELECT * FROM domain WHERE id = ?;', ctx.params.id);
    console.log('详情数据：', result);
    ctx.body = {
        code: 200,
        data: result[0],
        message: 'getInfo success'
    };
})

// module.exports =router