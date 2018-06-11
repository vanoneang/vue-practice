// 服务端渲染的文件,dev环境和pro环境一样
const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  // 返回html内容
  ctx.headers['ContentType'] = 'text/html'

  // 传给VueServerRenderer
  const context = { url: ctx.path }

  try {
    const appString = await renderer.renderToString(context)

    const {title} = context.meta.inject()

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: title.text()
    })

    ctx.body = html
  } catch (err) {
    console.log('render error', err)
    throw err
  }
}
