const Router = require('koa-router')
const axios = require('axios')
const path = require('path')
const fs = require('fs')
const MemoryFS = require('memory-fs')
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')

const serverRender = require('./server-render')
const serverConfig = require('../../build/webpack.config.server')

const serverComiler = webpack(serverConfig) //  webpack 的实例
const mfs = new MemoryFS()
serverComiler.outputFileSystem = mfs // 输出目录

let bundle // webpack有变化，就重新打包，拿到打包的东西
serverComiler.watch({}, (err, stats) => { // 监听
  if (err) throw err // 打包出现err直接抛出
  stats = stats.toJson() // 有些错误不是打包的错误，比如eslint的错误
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.warn(warn))

  // 读取生成的bundle文件
  const bundlePath = path.join(
    serverConfig.output.path, 'vue-ssr-server-bundle.json'
  )
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated')
})

const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = 'wait moment'
    return
  }

  // 通过axios去把客户端打包生成的js代码拿过来
  const clientManifestResp = await axios.get('http://127.0.0.1:8090/public/vue-ssr-client-manifest.json')
  const clientManifest = clientManifestResp.data

  // 拿到模板
  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'), 'utf-8'
  )

  const renderer = VueServerRenderer.createBundleRenderer(bundle, {
    inject: false, // 不按照官方提供的模板形式
    clientManifest // 把客户端打包的js用一个script标签包裹填入模板中
  })

  await serverRender(ctx, renderer, template)
}

const router = new Router()
router.get('*', handleSSR) // 所有的请求都经过ssr处理

module.exports = router
