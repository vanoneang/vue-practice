import PositionToastComponent from './toast-component.vue'

let $vm
let myPlugin = {}
myPlugin.install = function (vue, options) {
  // 创建构造器
  const ModalPositionToast = vue.extend(PositionToastComponent)
  // 挂载到一个元素上
  if (!$vm) {
    $vm = new ModalPositionToast({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)
  }

  const positionToast = function (options) {
    if (typeof options === 'object') {
      for (let i in options) {
        $vm[i] = options[i]
      }
    }
    $vm.show = true
  }

  if (!vue.$positionToast) {
    vue.$positionToast = positionToast
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
      this.$positionToast = vue.$positionToast
    }
  })
}
export default myPlugin
