<template>
  <div class="gugugou-my">
    <!-- 个人信息 -->
    <div class="user-info">
      <div class="wrap">
        <img src="/static/images/ad.jpg">
        <span>授权并查看</span>
      </div>
      <navigator class="msg">
        <!-- <img src="/static/images/msg.png"> -->
        <i class="iconfont icon-i-message"></i>
      </navigator>
    </div>
    <!-- 我的订单 -->
    <div class="my-order">
      <div class="bg"></div>
      <div class="wrap">
        <div class="line">
          <span class="title">我的订单</span>
          <navigator class="link">
            全部订单
            <i class="iconfont icon-angle-right"></i>
          </navigator>
        </div>
        <div class="step">
          <navigator class="item" v-for="(item, idx) in oList" :key="idx">
            <img :src="item.img_src">
            <span>{{item.name}}</span>
          </navigator>
        </div>
      </div>
    </div>
    <!-- 我的工具 -->
    <div class="my-tool">
      <div class="line">
        <span class="title">我的工具</span>
      </div>
      <div class="step">
        <navigator class="item" v-for="(item, idx) in oToolList" :key="idx" :url="item.link" hover-class="none">
          <img :src="item.img_src">
          <span>{{item.name}}</span>
        </navigator>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <p class="divider-line">猜你喜欢</p>
    <!-- 两列布局 -->
    <TwoColGoods :twoColGoods="twoColGoods"></TwoColGoods>

  </div>
</template>

<script>
import TwoColGoods from '@/components/TwoColGoods.vue' // 两列商品布局
export default {
  data () {
    return {
      oList: [ // 我的订单
        {img_src: '/static/images/icon_01.png', name: '代付款'},
        {img_src: '/static/images/icon_02.png', name: '代发货'},
        {img_src: '/static/images/icon_03.png', name: '代收货'},
        {img_src: '/static/images/icon_04.png', name: '代评价'},
        {img_src: '/static/images/icon_05.png', name: '退款/售后'}
      ],
      oToolList: [ // 我的工具
        {img_src: '/static/images/icon_06.png', name: '优惠券', link: '../myCoupon/main'},
        {img_src: '/static/images/icon_07.png', name: '我的地址', link: '../myCoupon/main'},
        {img_src: '/static/images/icon_08.png', name: '咕咕购客服', link: '../myCoupon/main'}
      ],
      twoColGoods: [ // 猜你喜欢商品列表
        {
          img_src: '/static/images/ad.jpg',
          title: '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
          price: '6.9',
          oldPrice: '12.5'
        },
        {
          img_src: '/static/images/ad.jpg',
          title: '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
          price: '6.9',
          oldPrice: '12.5'
        },
        {
          img_src: '/static/images/ad.jpg',
          title: '日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域',
          price: '6.9',
          oldPrice: '12.5'
        }
      ]
    }
  },
  components: {
    TwoColGoods
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.gugugou-my {
  // 个人信息
  .user-info {
    padding: 24rpx 40rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #b51c66;
    .wrap {
      display: flex;
      align-items: center;
      img {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        background-color: #eee;
      }
      span {
        margin-left: 24rpx;
        font-size: 30rpx;
        color: #fff;
      }
    }
    .msg {
      i {
        font-size: 40rpx;
        color: #fff;
      }
      // img {
      //   width: 30rpx;
      //   height: 30rpx;
      // }
    }
  }
  // 我的订单
  .my-order {
    position: relative;
    .bg {
      position: absolute;
      height: 180rpx;
      width: 100%;
      background-color: #b51c66;
      border-radius: 100% 100% 100% 100% / 0% 0% 60% 60%;
    }
    .wrap {
      position: relative;
      margin: 0 30rpx 0;
      background-color: #fff;
      border-radius: 10rpx;
      .line {
        padding: 24rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 1;
        border-radius: 8rpx;
        border-bottom: 1rpx solid #eee;
        .title {
          font-size: 26rpx;
          color: #333;
        }
        .link {
          display: flex;
          align-items: center;
          font-size: 26rpx;
          color: #999;
        }
      }
      .step {
        padding: 0 24rpx 24rpx;
        margin-top: 48rpx;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        .item {
          display: flex;
          align-items: center;
          flex-direction: column;
          flex: 0 0 20%;
          img {
            width: 44rpx;
            height: 36rpx;
          }
          span {
            margin-top: 20rpx;
            font-size: 26rpx;
          }
        }
      }
    }
  }
  // 我的工具
  .my-tool {
    margin: 24rpx 30rpx 0;
    border-radius: 10rpx;
    background-color: #fff;
    .line {
      padding: 24rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1;
      border-radius: 8rpx;
      border-bottom: 1rpx solid #eee;
      .title {
        font-size: 26rpx;
      }
    }
    .step {
      padding: 0 24rpx 24rpx;
      margin-top: 26rpx;
      display: flex;
      justify-content: space-between;
      .item {
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
          width: 36rpx;
          height: 36rpx;
        }
        span {
          margin-top: 20rpx;
          font-size: 26rpx;
        }
      }
    }
  }
  // 分割线
  .divider-line {
    margin-top: 24rpx;
    font-size: 28rpx;
    text-align:center;
    position:relative;
    &::before {
      content:'';
      width:34%;
      height:1px;
      background:#000;
      position:absolute;
      left:48rpx;
      top:50%;
    }
    &::after {
      content:'';
      width:34%;
      height:1px;
      background:#000;
      position:absolute;
      right:48rpx;
      top:50%;
    }
  }
}
</style>