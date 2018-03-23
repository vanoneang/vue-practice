import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: `
    <div>
      <ul>
        <li v-for="(val, key, index) in obj" :key="key">{{key + ':' + val + ':' + index}}</li>
      </ul>
      <div>
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
      </div>
    </div>
  `,
  data: {
    name: 0,
    obj: {
      a: 1,
      b: 2,
      c: 3
    },
    arr: [2, 3]
  }
})
