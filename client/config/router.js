import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history', // 默认是hash，改成history，这样可以去掉#
    // base: '/base/' // 路径前缀
    scrollBehavior (to, from, savedPosition) { // 有浏览记录的回来还在这个地方
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
