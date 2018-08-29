
// 根据不同的环境生产不同的配置
module.exports = (isDev) => {
  return {
    // 自动清除模板中字符串附近空格
    preserveWhitepace: true,
    // 把vue中的css独立编译,根据是否是生产环境设置
    extractCSS: !isDev
    // style模块以module模式
    // cssModules: {
    //   localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    //   cameCase: true
    // }
    // 热重载,生产环境关闭，
    // hotReload: isDev
    // loaders: {   // 自定义模块（template、style、script之外）
    //   'docs': docsLoader
    // }
  }
}
