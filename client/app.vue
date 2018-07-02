<template>
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <Header></Header>
    <p>{{count}}</p>
    <router-link :to="{name:'app'}">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <!-- <router-view v-if="$route.meta.keepAlive"/> -->
        <router-view/>
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
import Loading from './components/loading/loading.vue'

export default {
  metaInfo: {
    title: 'todo lists app'
  },
  components: {
    Header,
    Footer,
    Loading
  },
  mounted () {
    // this.$notify({
    //   content: 'test $notify',
    //   btn: 'close'
    // })
    this.updateCountAsync({
      num: 2018,
      time: 2000
    })
  },
  computed: {
    ...mapState(['count', 'loading']),
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
#loading{
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(255,255,255,.3)
  z-index 99
  display flex
  align-items center
  justify-content center
}
</style>


