import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    router.push(context.url)

    // 所以的异步操作做完才会回调
    router.onReady(() => {
      // 根据url匹配组件
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      context.meta = app.$meta() // 服务端meta
      resolve(app)
    })
  })
}
