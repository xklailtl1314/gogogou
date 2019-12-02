<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <Slogin></Slogin>
    <Swiper :swipers="swiperItems"></Swiper>
  </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar.vue' // 头部导航
import Slogin from '../../components/Slogin.vue' // 广告标语
import Swiper from '../../components/Swiper.vue' // 轮播

export default {
  data () {
    return {
      swiperItems: [
        '/static/images/1.jpg',
        '/static/images/2.jpg',
        '/static/images/3.jpg',
        '/static/images/4.jpg'
      ]
    }
  },
  components: {
    HeaderBar,
    Slogin,
    Swiper
  },
  methods: {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>

</style>
