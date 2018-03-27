import Vue from 'vue'

const component = {
  template: `
    <div :style="style">
      <div class="header">
        <!-- 插槽 -->
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #ccc'
      }
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
      <com-one>
        <span slot="header">this is header</span>
        <span slot="body">this is body</span>
      </com-one>
    </div>
  `
})
