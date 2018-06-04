import Vue from 'vue'

const compoent = {
  props: {
    active: {
      type: Boolean,
      // require: true,
      default: true
    },
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
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

/* eslint-disable no-new */
new Vue({

  el: '#root',
  template: `
    <div>
      <comp-one :active="num" :prop-one="prop1" @change="handleChange1"></comp-one>
      <input type="text" >
    </div>
  `,
  components: {
    CompOne: compoent
  },
  data () {
    return {
      num: false,
      prop1: 'text1'
    }
  },
  methods: {
    handleChange1 () {
      this.prop1 += 1
      console.log(this.prop1)
    }
  }
})
