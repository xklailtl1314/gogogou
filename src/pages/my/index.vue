<template>
  <div class="gugugou-my">
    <!-- 个人信息 -->
    <div class="user-info">
      <div class="wrap">
        <img src="">
        <span>授权并查看</span>
      </div>
      <navigator class="msg">
        <img src="/static/images/msg.png">
      </navigator>
    </div>
    <!-- 我的订单 -->
    <div class="my-order">
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
    <!-- 我的工具 -->
    <div class="my-tool">
      <div class="line">
        <span class="title">我的工具</span>
      </div>
      <div class="step">
        <navigator class="item" v-for="(item, idx) in oToolList" :key="idx">
          <img :src="item.img_src">
          <span>{{item.name}}</span>
        </navigator>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <p class="divider-line">猜你喜欢</p>
    <div class="two-clo-goods">
      <navigator class="item">
        <img src="/static/images/ad.jpg">
        <div class="wrap">
          <span class="title">日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域</span>
          <div class="line">
            <div class="price"><span>￥</span>6.9</div>
          </div>
          <div class="sub"><del>￥12.5</del></div>
        </div>
      </navigator>
      <navigator class="item">
        <img src="/static/images/ad.jpg">
        <div class="wrap">
          <span class="title">日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域</span>
          <div class="line">
            <div class="price"><span>￥</span>6.9</div>
          </div>
          <div class="sub"><del>￥12.5</del></div>
        </div>
      </navigator>
      <navigator class="item">
        <img src="/static/images/ad.jpg">
        <div class="wrap">
          <span class="title">日清合味道方便面整箱12杯开杯乐海鲜杯面泡面桶装速食刀剑神域</span>
          <div class="line">
            <div class="price"><span>￥</span>6.9</div>
          </div>
          <div class="sub"><del>￥12.5</del></div>
        </div>
      </navigator>
    </div>

  </div>
</template>

<script>
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
        {img_src: '/static/images/icon_06.png', name: '优惠券'},
        {img_src: '/static/images/icon_07.png', name: '我的地址'},
        {img_src: '/static/images/icon_08.png', name: '咕咕购客服'}
      ]
    }
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
    background-color: #fff;
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
      }
    }
    .msg {
      img {
        width: 30rpx;
        height: 30rpx;
      }
    }
  }
  // 我的订单
  .my-order {
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
      .link {
        display: flex;
        align-items: center;
        font-size: 26rpx;
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
  // 商品列表
  .two-clo-goods {
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
        height: 334rpx;
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
          line-height: 1;
          .price {
            font-size: 28rpx;
            span {
              font-size: 18rpx;
            }
          }
        }
        .sub {
          margin-top: 20rpx;
          font-size: 18rpx;
          line-height: 1;
        }
      }
    }
  }

}
</style>