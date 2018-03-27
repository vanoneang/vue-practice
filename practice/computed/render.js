import Vue from 'vue'

const component = {
  // template: `
  //   <div :style="style">
  //     <slot><slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style
    }, this.$slots.default)
  },
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
  mounted () {
    console.log(this.$refs.comp, this.$refs.span)
  },
  // template: `
  //   <div>
  //     <com-one ref="comp">
  //       <span ref="span">{{value}}</span>
  //     </com-one>
  //   </div>
  // `,
  render (createElement) {
    return createElement(
      'com-one',
      {ref: 'comp'},
      [
        createElement(
          'span',
          {ref: 'span'},
          this.value
        )
      ]
    )
  }
})
