import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  // template: `
  //   <div :id="test" @click="handleClick">
  //     {{isActive ? 'active' : 'not'}}
  //     {{arr.join(' ')}}
  //     {{Date.now()}}
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div :class="['content','content-te',{ active: !isActive }]">
      <p v-html="html"></p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>222</span>',
    test: 'main',
    color: {
      color: 'red'
    }
  },
  methods: {
    handleClick () {
      alert('clicked') // eslint-disable-line
    }
  }
})
