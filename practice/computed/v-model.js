import Vue from 'vue'

const component = {
  props: ['value'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value">
    </div>
  `,
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#root',
  components: {
    ComOne: component
  },
  data () {
    return {
      value: '234'
    }
  },
  template: `
    <div>
      <com-one v-model="value"></com-one>
    </div>
  `
})
