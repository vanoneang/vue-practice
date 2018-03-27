<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <todo></todo> -->
    <router-view />
    {{fullName}} {{count}}
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState
  // mapGetters
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

export default {
  components: {
    Header,
    Footer
  },
  mounted () {
    console.log(this.$store)
    this.$store.dispatch('updateCountAsync', {
      num: 5,
      time: 2000
    })
  },
  computed: {
    ...mapState({
      count: 'count'
    }),
    // count () {
    //   return this.$store.state.count
    // },
    fullName () {
      return this.$store.getters.fullName
    }
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


