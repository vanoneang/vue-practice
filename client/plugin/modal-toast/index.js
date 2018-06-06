import ToastComponent from './toast-component.vue'

let $vm
let myPlugin = {}
myPlugin.install = function (vue, options) {
  // 创建构造器
  const ModalToast = vue.extend(ToastComponent)
  // 挂载到一个元素上
  if (!$vm) {
    $vm = new ModalToast({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)
  }

  const toast = function (options) {
    if (typeof options === 'object') {
      for (let i in options) {
        $vm[i] = options[i]
      }
    }
    $vm.show = true
  }

  if (!vue.$toast) {
    vue.$toast = toast
  }

  // if (!vue.$plugins) {
  //   vue.$plugins = {
  //     modalToast
  //   }
  // } else {
  //   vue.$plugins.modalToast = modalToast
  // }

  vue.mixin({
    created () {
      this.$toast = vue.$toast
    }
  })
}
export default myPlugin
