<template>
  <div class="home">
    <!-- 头部导航 -->
    <HeaderBar></HeaderBar>
    <!-- 三栏口号 -->
    <Slogin></Slogin>
    <!-- 轮播 -->
    <Swiper :swipers="swiperItems"></Swiper>
    <!-- 分类 -->
    <Category :cate="category"></Category>
  </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar.vue' // 头部导航
import Slogin from '../../components/Slogin.vue' // 广告标语
import Swiper from '../../components/Swiper.vue' // 轮播
import Category from '../../components/Category.vue' // 分类

export default {
  data () {
    return {
      swiperItems: [
        '/static/images/1.jpg',
        '/static/images/2.jpg',
        '/static/images/3.jpg',
        '/static/images/4.jpg'
      ],
      category: [
        {url: '/static/images/5.jpg', name: '汽车汽配'},
        {url: '/static/images/5.jpg', name: '汽车汽配'},
        {url: '/static/images/5.jpg', name: '汽车汽配'},
        {url: '/static/images/5.jpg', name: '汽车汽配'},
        {url: '/static/images/5.jpg', name: '汽车汽配'},
        {url: '/static/images/5.jpg', name: '汽车汽配'},
        {url: '/static/images/5.jpg', name: '汽车汽配'},
        {url: '/static/images/5.jpg', name: '汽车汽配'},
        {url: '/static/images/5.jpg', name: '汽车汽配'},
        {url: '/static/images/5.jpg', name: '汽车汽配'}
      ]
    }
  },
  components: {
    HeaderBar,
    Slogin,
    Swiper,
    Category
  },
  methods: {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>

</style>
