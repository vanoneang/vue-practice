import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import Notification from './components/notification'

import App from './app.vue'
import createStore from './store'
import createRouter from './config/router'
import Tabs from './components/tabs'

import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta) // 服务端处理meta第三方插件
Vue.use(Notification)
Vue.use(Tabs)

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
