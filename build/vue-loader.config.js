module.exports = (isDev) => {
  return {
    // 自动清除模板中字符串附近空格
    preserveWhitepace: true,
    // 把vue中的css独立编译,根据是否是生产环境设置
    extractCSS: !isDev,
    cssModules: {}
    // 热重载,根据环境变量生产
    // hotReload: false,
  }
}
