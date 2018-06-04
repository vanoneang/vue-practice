import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: `
    <div>
      <p>name: {{getName}}</p>
      <p>number: {{number}}</p>
      <p>fullName: {{fullName}}</p>
      <p><input type="text" v-model="number"></p>
      <p><input type="text" v-model="getName"></p>
      <p>obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data: {
    firstName: 'Evan',
    lastName: 'Wang1',
    number: 0,
    fullName: '',
    obj: {
      a: '1'
    }
  },
  computed: { // 直接用于计算后显示
    getName: {
      get () {
        return `${this.firstName} ${this.lastName}`
      },
      set (getName) { // 不到万不得已不要用set
        const name = getName.split(' ')
        this.firstName = name[0]
        this.lastName = name[1]
      }
    }
  },
  watch: { // 监听到了某个值的变化，给后台发请求，默认情况下watch在页面初始化渲染的时候是不会执行的，除非这么用
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // },
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true // 初始化执行
    },
    'obj.a' () { // 如果想要监听一个对象的属性的变化
      console.log('changed')
    }
  }
})
