<template>
  <div class="boutique">
    <!-- 精选页 -->
    <!-- 头部导航 -->
    <HeaderBar :cateLink="cateLink" :cates="cates" :msgLink="msgLink"></HeaderBar>
    <!-- 三栏口号 -->
    <Slogin></Slogin>
    <!-- 轮播 -->
    <Swiper :swipers="swiperItems"></Swiper>
    <!-- 分类 -->
    <Category :cate="category"></Category>
    <!-- 好货档口 -->
    <div class="live-cards">
      <div class="line">
        <span class="title">{{hhdk.title}}</span>
        <span class="sub">{{hhdk.sub}}</span>
      </div>
      <div class="item-wrap">
        <div class="item" v-for="(item, idx) in hhdk.videoList" :key="idx">
          <navigator class="link">
            <div class="cover">
              <div class="wrap">
                <span class="left">直播中</span>
                <span class="right">{{item.num}}观看</span>
              </div>
              <img :src="item.img_src" class="img">
            </div>
            <span class="tit">{{item.title}}</span>
            <div class="bottom">
              <img :src="item.avatar">
              <div class="right">
                <i class="iconfont icon-heart"></i>
                <span>{{item.total}}</span>
              </div>
            </div>
          </navigator>
        </div>
      </div>
    </div>
    <!-- 广告位 -->
    <navigator class="main-ad">
      <image :src="ad" mode="widthFix"></image>
    </navigator>
    <!-- 边看变买、好物推荐 -->
    <div class="g-tab">
      <div class="top">
        <div class="item" @click="cur=idx" :class="[{active: cur==idx}]" v-for="(item, idx) in twoCol" :key="idx">
          <span class="title">{{item.title}}</span>
          <span class="sub">{{item.sub}}</span>
        </div>
      </div>

      <div class="two-clo-video" v-show="cur==idx" v-for="(item, idx) in twoCol" :key="idx">
        <navigator class="item" v-for="(item, i) in item.list" :key="i">
          <img :src="item.img_src">
          <div class="wrap">
            <span class="title">{{item.title}}</span>
            <div class="line">
              <div class="left">
                <img :src="item.avatar">
                <span>{{item.name}}</span>
              </div>
              <div class="right">
                <i class="iconfont icon-heart"></i>
                <span>{{item.total}}</span>
              </div>
            </div>
          </div>
        </navigator>
      </div>
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
export default {
  data () {
    return {
      cur: 0, // tab切换初始值
      msgLink: '../myMessage/main', // 头部导航链接-消息
      cates: '../cates/main', // 头部导航链接-分类
      cateLink: '../search/main', // 头部导航链接-搜索
      swiperItems: [ // 轮播
        '/static/images/1.jpg',
        '/static/images/2.jpg',
        '/static/images/3.jpg',
        '/static/images/4.jpg'
      ],
      category: [ // 分类
        { img_src: '/static/images/5.jpg', name: '直播购', link: '../goodsList/main' },
        { img_src: '/static/images/5.jpg', name: '咕咕商城', link: '../goodsList/main' },
        { img_src: '/static/images/5.jpg', name: '美食生鲜', link: '../goodsList/main' },
        { img_src: '/static/images/5.jpg', name: '美妆个护', link: '../goodsList/main' },
        { img_src: '/static/images/5.jpg', name: '天天进博', link: '../goodsList/main' }
      ],
      hhdk: {}, // 好货档口
      ad: '', // 广告占位图
      twoCol: []
    }
  },
  components: {
    HeaderBar,
    Slogin,
    Swiper,
    Category
  },
  methods: {
    getPageInfo () {
      util.request(api.Boutique).then(res => {
        if (res.status == 200) {
          this.hhdk = res.data.hhdk
          this.ad = res.data.ad
          this.twoCol = res.data.twoCol
        }
      })
    }
  },
  created () {
    this.getPageInfo()
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
// .category {
//   background-color: #eee !important;
// }
.swiper-wrap {
  .wrap {
    background-color: #eee !important;
  }
}
.live-cards {
  padding: 20rpx;
  margin: 18rpx 30rpx 0;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10rpx;
  .line {
    display: flex;
    .title {
      font-size: 32rpx;
      line-height: 1;
      color: #333;
    }
    .sub {
      margin-left: 20rpx;
      display: flex;
      align-items: flex-end;
      font-size: 24rpx;
      line-height: 1;
      color: #666;
    }
  }
  .item-wrap {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    line-height: 1;
    .item {
      margin-top: 20rpx;
      flex: 0 0 100%;
      .link {
        .cover {
          position: relative;
          .wrap {
            position: absolute;
            top: 20rpx;
            left: 20rpx;
            .left {
              padding: 5rpx 10rpx 5rpx 25rpx;
              font-size: 24rpx;
              color: #fff;
              background:linear-gradient(90deg,rgba(218,89,152,1) 0%,rgba(181,28,102,1) 100%);
              border-radius: 4rpx 0 0 4rpx;
            }
            .right {
              padding: 5rpx 10rpx;
              font-size: 24rpx;
              color: #fff;
              background:rgba(42,42,46,.6);
              border-radius: 0 4rpx 4rpx 0;
            }
          }
          .img {
            width: 100%;
          }
        }
        .tit {
          padding: 0 20rpx;
          margin: 20rpx 0 0 0;
          font-size: 28rpx;
          color: #333;
        }
        .bottom {
          margin-top: 20rpx;
          padding: 0 20rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img {
            width: 40rpx;
            height: 40rpx;
            border-radius: 50%;
          }
          .right {
            display: flex;
            .icon-heart {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 31rpx;
              height: 31rpx;
              font-size: 20rpx;
              color: #fff;
              border-radius: 50%;
              background-color: #B51C66;
            }
            span {
              margin-left: 5rpx;
              font-size: 24rpx;
              color: #999;
            }
          }
        }
      }
      &:nth-child(3),
      &:nth-child(2) {
        flex: 0 0 315rpx;
        width: 325rpx;
        .link {
          .cover {
            img {
              height: 186rpx;
            }
          }
          .tit {
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient:vertical;
            white-space: normal !important;
          }
        }
      }
      &:nth-child(3) {
        margin-left: 20rpx;
      }
    }
  }
}
.main-ad {
  margin: 40rpx 30rpx 0;
  display: flex;
  justify-content: center;
  img {
    border-radius: 6rpx;
  }
}
.g-tab {
  margin-top: 30rpx;
  .top {
    display: flex;
    .item {
      display: flex;
      flex: 1;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: 32rpx;
        line-height: 1;
      }
      .sub {
        margin-top: 15rpx;
        font-size: 24rpx;
        line-height: 1;
        color: #333;
      }
      &:not(:first-child) {
        border-left: 1px solid #ccc;
      }
      &.active {
        .title {
          color: #DB5998;
        }
        .sub {
          color: #FF9ECD;
        }
      }
    }
  }
  .two-clo-video {
    padding: 0 30rpx;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    .item {
      margin-top: 20rpx;
      display: flex;
      flex-direction: column;
      width: 334rpx;
      border-radius: 10rpx;
      overflow: hidden;
      background-color: #fff;
      &:nth-of-type(2n) {
        margin-left: 22rpx;
      }
      img {
        width: 334rpx;
        height: 470rpx;
      }
      .wrap {
        padding: 0 24rpx 20rpx;
        .title {
          margin-top: 20rpx;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: 30rpx;
          line-height: 38rpx;
        }
        .line {
          margin-top: 20rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left {
            display: flex;
            align-items: center;
            img {
              width: 40rpx;
              height: 40rpx;
              border-radius: 50%;
            }
            span {
              margin-left: 16rpx;
              font-size: 24rpx;
              color: #999;
            }
          }
          .right {
            display: flex;
            align-items: center;
            .icon-heart {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 31rpx;
              height: 31rpx;
              font-size: 20rpx;
              color: #fff;
              border-radius: 50%;
              background-color: #B51C66;
            }
            span {
              margin-left: 5rpx;
              font-size: 24rpx;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>