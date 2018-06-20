import DeleteComponent from './dialog-component.vue'
let $vm
let myPlugin = {}
myPlugin.install = function (vue, options) {
  // 创建构造器
  const ModalDelete = vue.extend(DeleteComponent)
  // 挂载到一个元素上
  if (!$vm) {
    $vm = new ModalDelete({
      el: document.createElement('div')
    })
    // 在 body 中插入，我们创建的并把 taost 组件构造器挂载到的容器： div
    document.body.appendChild($vm.$el)
  }

  const dialog = {
    show (options) {
      //  把从外界传进来的参数都映射到组件对应的位置
      if (typeof options === 'object') {
        for (let i in options) {
          $vm[i] = options[i]
        }
      }
      // 传出去的状态
      if (typeof options === 'object' && (options.clickStatus)) {
        $vm.$once('clickStatus', (status) => {
          options.clickStatus && options.clickStatus(status)
        })
      }
      $vm.show = true
    },
    hidden () {
      $vm.show = false
    }
  }
  // 挂载到 $pulgins 下
  if (!vue.$dialog) {
    vue.$dialog = dialog
  }
  // 添加全局混合，注入组件
  vue.mixin({
    created () {
      // 修改调用的手法
      this.$dialog = vue.$dialog
    }
  })
}
//  vue.use(plugin) 在入口js中使用
export default myPlugin
