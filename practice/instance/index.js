import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="list">this is {{text}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // },
})

app.$mount('#root')

// setInterval(() => {
//   app.text += 1
// }, 1000)

// console.log(app.$el)
// console.log(app.$root === app)
// console.log(app.$refs)
// console.log(app.$isServer)

// 绑定事件
// app.$on('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })

// // 触发事件
// app.$emit('test', 1, 2)

app.$set(app.obj, 'a', 3)
