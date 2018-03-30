<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <todo></todo> -->
    <router-view />
    <p> {{fullName}} {{count}}</p>
    <p></p>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters
  // mapActions
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

export default {
  components: {
    Header,
    Footer
  },
  // mounted () {
  //   this.updateCountAsync({
  //     num: 5,
  //     time: 2000
  //   })
  // },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName'])
  },
  methods: {
    // ...mapActions(['updateCountAsync'])
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


