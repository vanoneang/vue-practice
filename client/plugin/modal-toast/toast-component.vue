<template lang="html">
  <transition name="top">
      <div class="shield-wrapper" v-show="show">
          <div class="content-icon-wrapper">
            <i class="scale icon" :class="getIconStatus"></i>
          </div>
          <p class="toast-text">{{text}}</p>
      </div>
  </transition>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String, // success 成功 fail 失败 warn 警告
      default: 'success'
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    getIconStatus () {
      // success 成功 fail 失败 warn 警告
      return {
        'success el-icon-circle-check': this.type === 'success',
        'fail el-icon-warning': this.type === 'fail',
        'warn el-icon-warning': this.type === 'warn'
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          /*
          * 插件的写法和一般的组件的写法不一样，插件和容器之间不是父子关系，
          * 不用通过把内部的显示与隐藏传到外部来改变内部的状态（'闭环特征'）
          */
          this.show = false
        }, this.time)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.shield-wrapper
  background:#ffffff
  box-shadow:0 0 10px 0 rgba(0,0,0,0.10)
  border-radius:4px
  min-width:260px
  height:60px
  display: flex
  justify-content: flex-start
  align-items: center
  padding-right: 20px
  padding-left: 20px
  position: fixed
  top: 10px
  left: 50%
  transform: translateX(-50%)
  z-index: 2100
.scale
  color: #f89f39
  &::before
    font-size: 20px

.toast-text
  font-size:12px
  color:#999999
  margin-left: 10px
/*动画进入, 动画离开*/
.top-enter-active, .top-leave-active
  transition: all .3s ease
/*定义进入之前，和离开之后的状态*/
.top-enter, .top-leave-to
  transform: translate(-50%, -100%)
  opacity: 0;
.success
  color: #15b26d
.fail
  color: #f76260
.warn
  color: #f89f39
</style>
