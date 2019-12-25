<template>
  <div class="my-collection">
    <!-- 我的收藏页 -->
    <!-- 我的列表 -->
    <div class="my-list" v-if="on_off">
      <navigator v-for="(item, idx) in goodsList" :key="idx" class="goods-list" hover-class="none">
        <img :src="item.img_src" class="img">
        <div class="right">
          <div class="title">{{item.title}}</div>
          <div class="sub">{{item.sub}}</div>
          <div class="tip" v-show="item.tip" ><span>{{item.tip}}</span></div>
          <div class="bottom">
            <span class="price"><small>￥</small>{{item.price}}</span>
            <span class="btn">找相似</span>
          </div>
        </div>
      </navigator>
    </div>
    <!-- 没有收藏 -->
    <div class="empty" v-else>
      <i class="iconfont icon-gouwudai"></i>
      <span class="title">收藏夹空空如也</span>
      <navigator class="link" :url="oLink" open-type="reLaunch" hover-class="none">
        <span>去商城逛逛吧</span>
        <i class="iconfont icon-angle-right"></i>
      </navigator>
    </div>
  </div>
</template>

<script>
import util from '@/utils/index.js'
import api from '@/../config/api.js'
export default {
  data () {
    return {
      on_off: true, // 判断是否为空
      oLink: '../index/main', // 空状态商城链接
      goodsList: [] // 收藏列表
    }
  },
  methods: {
    getCollection () { // 获取收藏列表
      util.request(api.Collection).then(res => {
        // console.log(res)
        if (res.status == 200) {
          this.goodsList = res.message
          // console.log(this.goodsList)
        }
      })
    }
  },
  created () {
    this.getCollection()
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.my-collection {
  .my-list {
    // margin-top: 20rpx;
    padding: 20rpx 30rpx 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-top: 1rpx solid #eee;
    .goods-list {
      margin-bottom: 20rpx;
      display: flex;
      height: 240rpx;
      .img {
        width: 240rpx;
        height: 240rpx;
        border-radius: 10rpx;
      }
      .right {
        margin-left: 20rpx;
        display: flex;
        flex-direction: column;
        flex: 1;
        .title {
          font-size: 28rpx;
          color: #333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .sub {
          margin-top: 20rpx;
          font-size: 24rpx;
          color: #666;
        }
        .tip {
          span {
            padding: 5rpx 10rpx;
            font-size: 20rpx;
            color: #666;
            border-radius: 6rpx;
            background-color: #eee;
          }
        }
        .bottom {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          .price {
            display: flex;
            align-items: center;
            font-size: 32rpx;
            font-weight: 600;
            color: #b51c66;
            small {
              font-size: 22rpx;
              font-weight: 400;
            }
          }
          .btn {
            padding: 5rpx 20rpx;
            display: flex;
            align-items: center;
            font-size: 20rpx;
            line-height: 1;
            border-radius: 24rpx;
            color: #999;
            border: 1rpx solid #999;
          }
        }
      }
    }
  }
  // 空状态
  .empty {
    margin-top: 270rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    i.icon-gouwudai {
      font-size: 170rpx;
      line-height: 1;
      color: #ccc;
    }
    .title {
      margin-top: 45rpx;
      font-size: 26rpx;
      color: #666;
    }
    .link {
      margin-top: 20rpx;
      padding: 20rpx 34rpx;
      display: flex;
      align-items: center;
      border: 1rpx solid #b5b5bf;
      border-radius: 36rpx;
      span {
        font-size: 30rpx;
        line-height: 1;
        color: #666;
      }
      .icon-angle-right {
        margin-left: 20rpx;
        font-size: 22rpx;
        color: #666;
      }
    }
  }
}
</style>