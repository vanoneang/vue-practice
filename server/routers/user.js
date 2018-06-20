const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'evan' && user.password === 'evan') {
    ctx.session.user = {
      username: 'evan'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'evan'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
