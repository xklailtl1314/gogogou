<template>
  <div class="home">
    <!-- 头部导航 -->
    <HeaderBar :cateLink="cateLink" :cates="cates" :msgLink="msgLink"></HeaderBar>
    <!-- 三栏口号 -->
    <Slogin></Slogin>
    <!-- 轮播 -->
    <Swiper :swipers="swiperItems"></Swiper>
    <!-- 分类 -->
    <Category :cate="category"></Category>
    <!-- 今日必拼 -->
    <!-- <TodayDiscount :todayDiscount="todayDiscount"></TodayDiscount> -->
    <!-- 限时秒杀 -->
    <limitBuy :timeBuy="timeBuy" :limitBuyLink="limitBuyLink"></limitBuy>
    <!-- 精挑细选 -->
    <div class="jtxx">
      <div class="top">
        <div class="left">
          <span>{{goodsList.title}}</span>
          <label>{{goodsList.subTitle}}</label>
        </div>
      </div>
      <TwoColGoods :twoColGoods="goodsList.content" :showUrl="showUrl"></TwoColGoods>
    </div>

  </div>
</template>

<script>
import util from '@/utils/index.js'
import api from '@/../config/api.js'
import HeaderBar from '@/components/HeaderBar.vue' // 头部导航
import Slogin from '@/components/Slogin.vue' // 广告标语
import Swiper from '@/components/Swiper.vue' // 轮播
import Category from '@/components/Category.vue' // 分类
// import TodayDiscount from '@/components/TodayDiscount.vue' // 今日必拼
import limitBuy from '@/components/limitBuy.vue' // 限时秒杀
import TwoColGoods from '@/components/TwoColGoods.vue' // 两列商品布局

export default {
  data () {
    return {
      showUrl: '../goodsShow/main', // 商品详情
      msgLink: '../myMessage/main', // 头部导航链接-消息
      limitBuyLink: '../limitBuy/main', // 限时秒杀链接
      cates: '../cates/main', // 头部导航链接-分类
      cateLink: '../search/main', // 头部导航链接-搜索
      swiperItems: [ // 轮播
        '/static/images/1.jpg',
        '/static/images/2.jpg'
      ],
      category: [ // 分类
        { img_src: '/static/tmp/mall01.png', name: '汽车汽配', link: '../goodsList/main' },
        { img_src: '/static/tmp/mall02.png', name: '房产家装', link: '../goodsList/main' },
        { img_src: '/static/tmp/mall03.png', name: '保险理财', link: '../goodsList/main' },
        { img_src: '/static/tmp/mall04.png', name: '服务名品', link: '../goodsList/main' },
        { img_src: '/static/tmp/mall05.png', name: '美妆个护', link: '../goodsList/main' },
        { img_src: '/static/tmp/mall06.png', name: '食品生鲜', link: '../goodsList/main' },
        { img_src: '/static/tmp/mall07.png', name: '数码影音', link: '../goodsList/main' },
        { img_src: '/static/tmp/mall08.png', name: '时尚家庭', link: '../goodsList/main' },
        { img_src: '/static/tmp/mall09.png', name: '母婴玩具', link: '../goodsList/main' },
        { img_src: '/static/tmp/mall10.png', name: '生活服务', link: '../goodsList/main' }
      ],
      todayDiscount: {}, // 今日必拼
      timeBuy: {}, // 限时秒杀
      goodsList: {} // 精挑细选
    }
  },
  methods: {
    getInfo () { // mock数据获取
      util.request(api.HomeInfo).then(res => {
        if (res.status == 200) {
          // this.swiperItems = res.swiperItems // 轮播
          // this.category = res.homeCate // 分类
          this.todayDiscount = res.todayDiscount // 今日必拼
          this.timeBuy = res.timeBuy // 限时秒杀
          this.goodsList = res.jtxx // 精挑细选
        }
      })
    }
  },
  components: {
    HeaderBar,
    Slogin,
    Swiper,
    Category,
    // TodayDiscount,
    limitBuy,
    TwoColGoods
  },
  created () {
    this.getInfo()
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.header-bar {
  .category {
    background-color: transparent;
  }
}
.category {
  background-color: #fff;
}
.jtxx {
  .top {
    padding: 0 30rpx;
    .left {
      span {
        margin-top: 20rpx;
        font-size: 32rpx;
      }
      label {
        margin-left: 20rpx;
        font-size: 24rpx;
      }
    }
  }
}
</style>
