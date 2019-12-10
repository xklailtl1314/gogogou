<template>
  <div class="home">
    <!-- 头部导航 -->
    <HeaderBar :cateLink="cateLink"></HeaderBar>
    <!-- 三栏口号 -->
    <Slogin></Slogin>
    <!-- 轮播 -->
    <Swiper :swipers="swiperItems"></Swiper>
    <!-- 分类 -->
    <Category :cate="category"></Category>
    <!-- 今日必拼 -->
    <TodayDiscount></TodayDiscount>
    <!-- 限时秒杀 -->
    <limitBuy></limitBuy>
  </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar.vue' // 头部导航
import Slogin from '../../components/Slogin.vue' // 广告标语
import Swiper from '../../components/Swiper.vue' // 轮播
import Category from '../../components/Category.vue' // 分类
import TodayDiscount from '../../components/TodayDiscount.vue' // 今日必拼
import limitBuy from '../../components/limitBuy.vue' // 限时秒杀

export default {
  data () {
    return {
      cateLink: '../search/main', // 头部导航链接
      swiperItems: [ // 轮播
        '/static/images/1.jpg',
        '/static/images/2.jpg',
        '/static/images/3.jpg',
        '/static/images/4.jpg'
      ],
      category: [ // 分类
        { url: '/static/images/5.jpg', name: '汽车汽配', link: '../goodsList/main' },
        { url: '/static/images/5.jpg', name: '房产家装', link: '../goodsList/main' },
        { url: '/static/images/5.jpg', name: '保险理财', link: '../goodsList/main' },
        { url: '/static/images/5.jpg', name: '服务名品', link: '../goodsList/main' },
        { url: '/static/images/5.jpg', name: '美妆个护', link: '../goodsList/main' },
        { url: '/static/images/5.jpg', name: '食品生鲜', link: '../goodsList/main' },
        { url: '/static/images/5.jpg', name: '数码影音', link: '../goodsList/main' },
        { url: '/static/images/5.jpg', name: '时尚家庭', link: '../goodsList/main' },
        { url: '/static/images/5.jpg', name: '母婴玩具', link: '../goodsList/main' },
        { url: '/static/images/5.jpg', name: '生活服务', link: '../goodsList/main' }
      ]
    }
  },
  components: {
    HeaderBar,
    Slogin,
    Swiper,
    Category,
    TodayDiscount,
    limitBuy
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
</style>
