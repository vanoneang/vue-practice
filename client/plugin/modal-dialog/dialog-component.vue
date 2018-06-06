<template lang="html">
  <transition name="el-fade-in-linear">
    <div class="shield-mask-wrapper" v-show="show">
      <div class="shield-wrapper link-man-padding">
        <span class="icon-wrapper" @click="changeModalStatus('cancel')">
          <i class="el-icon-close padding-icon"></i>
        </span>
        <div class="content">
          <div class="content-icon-wrapper">
            <i class="el-icon-warning scale icon"></i>
          </div>
          <p class="text" v-html="showText"></p>
          <div class="bnt-wrapper">
            <a class="ensure cancel margin-cancel" @click="changeModalStatus('cancel')">取消</a>
            <a class="ensure" @click="changeModalStatus('ok')">确定</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: [String], // del updataCompany bill // 传进来不同的类型，来显示不同的内容 增加插件的复用性
    text: [String]
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    showText () {
      // if (this.type === 'del') {
      //   return this.text
      // }
      // if (this.type === 'updataCompany') {
      //   return this.text
      // }
      // if (this.type === 'bill') {
      //   return this.text
      // }
      return this.text
    }
  },
  methods: {
    changeModalStatus (type) {
      if (type === 'cancel') { // 取消
        this.$emit('clickStatus', {statu: false})
        this.hidden()
      }
      if (type === 'ok') { // 确定
        this.$emit('clickStatus', {statu: true})
        this.hidden()
      }
    },
    hidden () {
      /*
      * 插件的写法和一般的组件的写法不一样，插件和容器之间不是父子关系，
      * 不用通过把内部的显示与隐藏传到外部来改变内部的状态（'闭环特征'）
      */
      this.show = false
    }
  }
}
</script>

<style scoped lang="styl">
.padding-icon
  padding: 10px

.shield-mask-wrapper
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(128,128,128,.4)
  z-index: 2012
.shield-wrapper
  display: flex
  width: 420px
  flex-direction: column
  align-items: center
  padding-bottom: 40px
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  background-color: #fff
  padding-top: 76px

.icon-wrapper
  position: absolute
  top: 20px
  right: 20px

.close-icon-wrapper
  display: flex
  justify-content: flex-end

.link-man-padding
  padding-right: 20px
  padding-left: 20px

.text
  margin-top: 22px
  font-size:12px;
  color:#333333;
  line-height:18px
  text-align:center

.content
  display: flex
  flex-direction: column
  align-items: center

.scale
  /*line-height: 60px*/
  color: #f89f39
  &::before
    font-size: 80px
.ensure
  width: 100px
  height: 40px
  font-size:14px
  line-height:40px
  background-color: #4a90e2
  color: #fff
  text-decoration: none
  text-align: center
  margin-top: 37px
.margin-cancel
  margin-right: 20px
.cancel
  background-color: #fff
  color: #4a90e2
  border: 1px solid #4a90e2
.content-icon-wrapper
  width: 80px
  height: 80px
  position: relative
.bnt-wrapper
  display: flex
  justify-content: center

</style>
