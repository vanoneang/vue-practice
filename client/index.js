import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/index'

import ModalToast from './plugin/modal-toast'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ModalToast)

const router = createRouter()
const store = createStore()

// 跳转之前的钩子，有三个函数，可以进行参数校验，一些页面是需要登录才能跳转的
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next() // 可以加path属性跳转
})

// 每次mutation变化的回调
store.subscribe((mutation, state) => {
  console.log(mutation.type)
  console.log(mutation.payload)
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
