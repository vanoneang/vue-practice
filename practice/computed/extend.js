import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <p>{{text}}</p>
      <p v-show="active">see mo if active</p>
      <p @click="handleChange">{{propOne}}</p>
    </div>
  `,
  data () {
    return {
      text: 123
    }
  },
  mounted () {
    console.log('compoent mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// 如果有遇到，一个非常好的组件，但是我只需要其中的一部分功能，就可以继承该组件，自己定义需要的
const CompVue = Vue.extend(compoent)

/* eslint-disable no-new */
new CompVue({
  el: '#root',
  propsData: { // 继承传值用propsData
    propOne: 'test'
  },
  mounted () {
    console.log('comp mounted')
  },
  data: {
    text: 132
  }
})
