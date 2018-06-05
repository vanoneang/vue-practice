import Router from 'vue-router'

import routes from './routes'

export default () => { // 因为有服务端渲染，防止内存溢出
  return new Router({
    routes,
    mode: 'history', // 默认是hash，改成history，这样可以去掉#
    // base: '/base/' // 路径前缀,但是如果直接把base去掉也能正常显示，不强制
    linkActiveClass: 'active-link', // 有一部分link匹配时，显示
    linkExactActiveClass: 'exact-active-link', // 完全匹配link时，显示
    scrollBehavior (to, from, savedPosition) { // 有浏览记录的回来还在这个地方，页面跳转的时候要不要滚动
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
    // fallback: true
    // parseQuery (query) { // 初始化参数

    // },
    // stringQuery (obj) {

    // }
  })
}
