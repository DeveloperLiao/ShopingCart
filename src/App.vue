<template>
  <div>
    <Header></Header>

    <router-view></router-view>

    <Footer v-show="this.$route.meta.isShow"></Footer>
  </div>

</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 在APP根组件中发送请求，可以减少发送请求的次数，因为APP根组件只需要渲染一次请求到的数据就可供其子组件使用多次，提高性能
    // 发送请求给vuex仓库，存储数据
    this.$store.dispatch('CategoryList')

  }
}
</script>

<style lang="less">
</style>
