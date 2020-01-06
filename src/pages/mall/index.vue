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
      <TwoColGoods :twoColGoods="goodsList.content"></TwoColGoods>
    </div>

    <!-- 回到顶部 -->
    <BackTop></BackTop>
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
import BackTop from '@/components/BackTop.vue' // 返回顶部

export default {
  data () {
    return {
      // showUrl: '../goodsShow/main', // 商品详情
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
      todayDiscount: {
        'name': '今日必拼',
        'more': '更多超值团',
        'users': [
          { 'avator': '@image(30x30)', 'name': '王小明' },
          { 'avator': '@image(30x30)', 'name': '虎狮郎右兵卫' },
          { 'avator': '@image(30x30)', 'name': '虎狮狼五右卫门' },
          { 'avator': '@image(30x30)', 'name': '九天应元雷声普化天尊' }
        ],
        'list': [
          { 'img_src': '@image(220x220)', 'price': 220, 'oldPrice': 230 },
          { 'img_src': '@image(220x220)', 'price': 220, 'oldPrice': 230 },
          { 'img_src': '@image(220x220)', 'price': 220, 'oldPrice': 230 }
        ]
      }, // 今日必拼
      timeBuy: {
        'title': '限时秒杀',
        'xsms': [
          {
            'startTime': '2019-12-30 08:00:00',
            'timeState': '',
            'toShow': '',
            'content': [
              {
                'id': 1,
                'img_src': '@image(240x240)',
                'title': '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
                'sub': '食品类销量排15名',
                'price': 9.9,
                'oldPrice': 12.9,
                'toShow': ''
              },
              {
                'id': 2,
                'img_src': '@image(238x238)',
                'title': '施耐德官方旗舰店官网开关插座面板一单开五孔USB插座 绎尚镜瓷白',
                'sub': '电器类销量排5名',
                'price': 12,
                'oldPrice': 16,
                'toShow': ''
              },
              {
                'id': 3,
                'img_src': '@image(238x238)',
                'title': '原装电之皇者oyaide欧亚德 DV-510 5N纯银 高清视频线 DV摄录线 ',
                'sub': '电器类销量排15名',
                'price': 1209,
                'oldPrice': 2099,
                'toShow': ''
              }
            ]},
          {
            'startTime': '2019-12-30 10:00:00',
            'timeState': '',
            'toShow': '',
            'content': [
              {
                'id': 2,
                'img_src': '@image(238x238)',
                'title': '施耐德官方旗舰店官网开关插座面板一单开五孔USB插座 绎尚镜瓷白',
                'sub': '电器类销量排5名',
                'price': 12,
                'oldPrice': 16,
                'toShow': ''
              },
              {
                'id': 1,
                'img_src': '@image(238x238)',
                'title': '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
                'sub': '食品类销量排15名',
                'price': 9.9,
                'oldPrice': 12.9,
                'toShow': ''
              },
              {
                'id': 3,
                'img_src': '@image(238x238)',
                'title': '原装电之皇者oyaide欧亚德 DV-510 5N纯银 高清视频线 DV摄录线 ',
                'sub': '电器类销量排15名',
                'price': 1209,
                'oldPrice': 2099,
                'toShow': ''
              }
            ]},
          {
            'startTime': '2019-12-30 12:00:00',
            'timeState': '',
            'toShow': '',
            'content': [
              {
                'id': 3,
                'img_src': '@image(238x238)',
                'title': '原装电之皇者oyaide欧亚德 DV-510 5N纯银 高清视频线 DV摄录线 ',
                'sub': '电器类销量排15名',
                'price': 1209,
                'oldPrice': 2099,
                'toShow': ''
              },
              {
                'id': 1,
                'img_src': '@image(238x238)',
                'title': '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
                'sub': '食品类销量排15名',
                'price': 9.9,
                'oldPrice': 12.9,
                'toShow': ''
              },
              {
                'id': 2,
                'img_src': '@image(238x238)',
                'title': '施耐德官方旗舰店官网开关插座面板一单开五孔USB插座 绎尚镜瓷白',
                'sub': '电器类销量排5名',
                'price': 12,
                'oldPrice': 16,
                'toShow': ''
              }
            ]},
          {
            'startTime': '2019-12-30 14:00:00',
            'timeState': '',
            'toShow': '',
            'content': [
              {
                'id': 1,
                'img_src': '@image(238x238)',
                'title': '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
                'sub': '食品类销量排15名',
                'price': 9.9,
                'oldPrice': 12.9,
                'toShow': ''
              },
              {
                'id': 2,
                'img_src': '@image(238x238)',
                'title': '施耐德官方旗舰店官网开关插座面板一单开五孔USB插座 绎尚镜瓷白',
                'sub': '电器类销量排5名',
                'price': 12,
                'oldPrice': 16,
                'toShow': ''
              },
              {
                'id': 3,
                'img_src': '@image(238x238)',
                'title': '原装电之皇者oyaide欧亚德 DV-510 5N纯银 高清视频线 DV摄录线 ',
                'sub': '电器类销量排15名',
                'price': 1209,
                'oldPrice': 2099,
                'toShow': ''
              }
            ]},
          {
            'startTime': '2019-12-30 16:00:00',
            'timeState': '',
            'toShow': '',
            'content': [
              {
                'id': 2,
                'img_src': '@image(238x238)',
                'title': '施耐德官方旗舰店官网开关插座面板一单开五孔USB插座 绎尚镜瓷白',
                'sub': '电器类销量排5名',
                'price': 12,
                'oldPrice': 16,
                'toShow': ''
              },
              {
                'id': 1,
                'img_src': '@image(238x238)',
                'title': '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
                'sub': '食品类销量排15名',
                'price': 9.9,
                'oldPrice': 12.9,
                'toShow': ''
              },
              {
                'id': 3,
                'img_src': '@image(238x238)',
                'title': '原装电之皇者oyaide欧亚德 DV-510 5N纯银 高清视频线 DV摄录线 ',
                'sub': '电器类销量排15名',
                'price': 1209,
                'oldPrice': 2099,
                'toShow': ''
              }
            ]},
          {
            'startTime': '2019-12-30 18:00:00',
            'timeState': '',
            'toShow': '',
            'content': [
              {
                'id': 3,
                'img_src': '@image(238x238)',
                'title': '原装电之皇者oyaide欧亚德 DV-510 5N纯银 高清视频线 DV摄录线 ',
                'sub': '电器类销量排15名',
                'price': 1209,
                'oldPrice': 2099,
                'toShow': ''
              },
              {
                'id': 1,
                'img_src': '@image(238x238)',
                'title': '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
                'sub': '食品类销量排15名',
                'price': 9.9,
                'oldPrice': 12.9,
                'toShow': ''
              },
              {
                'id': 2,
                'img_src': '@image(238x238)',
                'title': '施耐德官方旗舰店官网开关插座面板一单开五孔USB插座 绎尚镜瓷白',
                'sub': '电器类销量排5名',
                'price': 12,
                'oldPrice': 16,
                'toShow': ''
              }
            ]},
          {
            'startTime': '2019-12-30 20:00:00',
            'timeState': '',
            'toShow': '',
            'content': [
              {
                'id': 1,
                'img_src': '@image(238x238)',
                'title': '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
                'sub': '食品类销量排15名',
                'price': 9.9,
                'oldPrice': 12.9,
                'toShow': ''
              },
              {
                'id': 2,
                'img_src': '@image(238x238)',
                'title': '施耐德官方旗舰店官网开关插座面板一单开五孔USB插座 绎尚镜瓷白',
                'sub': '电器类销量排5名',
                'price': 12,
                'oldPrice': 16,
                'toShow': ''
              },
              {
                'id': 3,
                'img_src': '@image(238x238)',
                'title': '原装电之皇者oyaide欧亚德 DV-510 5N纯银 高清视频线 DV摄录线 ',
                'sub': '电器类销量排15名',
                'price': 1209,
                'oldPrice': 2099,
                'toShow': ''
              }
            ]},
          {
            'startTime': '2019-12-30 22:00:00',
            'timeState': '',
            'toShow': '',
            'content': [
              {
                'id': 2,
                'img_src': '@image(238x238)',
                'title': '施耐德官方旗舰店官网开关插座面板一单开五孔USB插座 绎尚镜瓷白',
                'sub': '电器类销量排5名',
                'price': 12,
                'oldPrice': 16,
                'toShow': ''
              },
              {
                'id': 1,
                'img_src': '@image(238x238)',
                'title': '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
                'sub': '食品类销量排15名',
                'price': 9.9,
                'oldPrice': 12.9,
                'toShow': ''
              },
              {
                'id': 3,
                'img_src': '@image(238x238)',
                'title': '原装电之皇者oyaide欧亚德 DV-510 5N纯银 高清视频线 DV摄录线 ',
                'sub': '电器类销量排15名',
                'price': 1209,
                'oldPrice': 2099,
                'toShow': ''
              }
            ]}
        ]
      }, // 限时秒杀
      goodsList: {
        'title': '精挑细选',
        'subTitle': '人工优选好物',
        'content': [
          {
            'id': 6,
            'img_src': '@image(334x334)',
            'title': '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
            'price': '12',
            'oldPrice': '22',
            'saleNum': '200',
            'tip': '新品'
          },
          {
            'id': 7,
            'img_src': '@image(334x334)',
            'title': '2019秋冬女装春装新款上衣连衣裙加绒加厚打底衫女长袖衬衫t恤女',
            'price': '78',
            'oldPrice': '89',
            'saleNum': '188',
            'tip': '满减'
          },
          {
            'id': 8,
            'img_src': '@image(334x334)',
            'title': '2019秋冬女装春装新款上衣连衣裙加绒加厚打底衫女长袖衬衫t恤女',
            'price': '88',
            'oldPrice': '99',
            'saleNum': '376',
            'tip': '满减'
          },
          {
            'id': 9,
            'img_src': '@image(334x334)',
            'title': 'Amazfit GTS 智能手表 华米户外GPS跑步游泳运动健康男女多功能心率防水手环苹果安卓支付watch',
            'price': '12',
            'oldPrice': '32',
            'saleNum': '124',
            'tip': '新品'
          },
          {
            'id': 10,
            'img_src': '@image(334x334)',
            'title': 'LOFREE/洛斐 糖豆计算器 财务办公可爱女时尚个性创意迷你小号便携机械键盘青轴打字机复古打字机洛菲',
            'price': '345',
            'oldPrice': '567',
            'saleNum': '387',
            'tip': '新品'
          }
        ]
      } // 精挑细选
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
          // console.log(res.jtxx)
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
    TwoColGoods,
    BackTop // 返回顶部
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
