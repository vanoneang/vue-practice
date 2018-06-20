<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{count}}</p>
    <router-link :to="{name:'app'}">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

export default {
  metaInfo: {
    title: 'todo lists app'
  },
  components: {
    Header,
    Footer
  },
  mounted () {
    this.$notify({
      content: 'test $notify',
      btn: 'close'
    })
    this.updateCountAsync({
      num: 2018,
      time: 2000
    })
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName'])
  },
  methods: {
    ...mapActions(['updateCountAsync'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


