<template>
  <div>
    <span class="content">{{content}}</span>
    <a class="btn">{{btn}}</a>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
