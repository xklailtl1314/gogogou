<template>
  <!-- 我的订单-待付款-详情 -->
  <div class="my-order-waitpay">
    <!-- 进度详情 -->
    <div class="step-info">
      <div class="top">
        <i class="iconfont icon-iconfontredpacket"></i>
        <div class="wrap">
          <span class="tit">等待买家付款</span>
          <span class="sub">请于29分42秒内付款，超时订单将自动关闭</span>
        </div>
      </div>
      <div class="bottom">
        <div class="step">买家付款</div>
        <div class="step">商家发货</div>
        <div class="step">交易完成</div>
      </div>
    </div>
    <!-- 地址信息 -->
    <div class="address-info">
      <i class="iconfont icon-address_icon"></i>
      <div class="r">
        <div class="t">
          <span class="left">收货人：邱敏</span>
          <span class="right">13636320811</span>
        </div>
        <div class="b">收货地址：上海市杨浦区 包头路1150弄 城市名园22号403室</div>
      </div>
    </div>
    <!-- 商品 -->
    <div class="shop">
      <div class="top">
        <div class="left">
          <img src="/static/images/g-icon2.png">
          <span>雷蛇官方旗舰店</span>
          <i class="iconfont icon-angle-right"></i>
        </div>
        <div class="right">
          <span>等待买家付款</span>
        </div>
      </div>
      <span class="order-num">订单编号：EF201912055521492158129</span>
      <div class="order-item">
        <img src="/static/images/ad.jpg">
        <div class="m">
          <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
          <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
        </div>
        <div class="r">
          <span class="t">¥ 299.00</span>
          <span class="b">x1</span>
        </div>
      </div>
      <div class="oList">
        <div class="item">
          <span class="l">优惠信息</span>
          <span class="r">满199元，部分包邮</span>
        </div>
        <div class="item">
          <span class="l">配送方式</span>
          <span class="r">快递</span>
        </div>
        <div class="item">
          <span class="l">买家留言</span>
          <span class="r">无</span>
        </div>
        <div class="item">
          <span class="l">合计</span>
          <span class="r">￥6.9</span>
        </div>
      </div>
      <!-- 底部栏 -->
      <div class="pay-tab">
        <div class="wrap">
          <div class="t">
            合计：<span>¥ 6.9</span>
          </div>
          <span class="submit">去支付</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
page {
  padding-bottom: 160rpx;
  background-color: #eee;
}
.my-order-waitpay {
  .step-info {
    padding: 40rpx 30rpx 80rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    .top {
      display: flex;
      align-items: center;
      width: 100%;
      .iconfont {
        font-size: 40rpx;
        color: #999;
      }
      .wrap {
        margin-left: 20rpx;
        display: flex;
        flex-direction: column;
        line-height: 1;
        .tit {
          font-size: 30rpx;
          color: #333;
        }
        .sub {
          margin-top: 10rpx;
          font-size: 24rpx;
          color: #666;
        }
      }
    }
    .bottom {
      margin-top: 40rpx;
      display: flex;
      justify-content: space-between;
      width: 100%;
      .step {
        position: relative;
        font-size: 20rpx;
        color: #999;
        &:last-child {
          &::after {
            content: initial;
          }
        }
        &::before {
          content: '';
          position: absolute;
          bottom: -30rpx;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          width: 10rpx;
          height: 10rpx;
          border-radius: 50%;
          background-color: #999;
        }
        &::after {
          content: '';
          position: absolute;
          bottom: -26rpx;
          left: 76%;
          width: 260rpx;
          height: 2rpx;
          background-color: #999;
        }
      }
    }
  }
  .address-info {
    padding: 20rpx 30rpx;
    display: flex;
    background-color: #fff;
    .iconfont {
      font-size: 24rpx;
      color: #333;
    }
    .r {
      margin-left: 20rpx;
      display: flex;
      flex-direction: column;
      .t {
        display: flex;
        justify-content: space-between;
        line-height: 1;
        .left {
          font-size: 30rpx;
          color: #333;
        }
        .right {
          font-size: 30rpx;
          color: #333;
        }
      }
      .b {
        margin-top: 20rpx;
        font-size: 24rpx;
        line-height: 1;
        color: #666;
      }
    }
  }
  .shop {
    position: relative;
    margin-top: 20rpx;
    // padding: 0 30rpx;
    line-height: 1;
    background-color: #fff;
    .top {
      padding: 20rpx 30rpx 10rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1;
      .left {
        display: flex;
        align-items: center;
        img {
          width: 66rpx;
          height: 26rpx;
          border-radius: 10rpx;
        }
        span {
          margin-left: 20rpx;
          font-size: 30rpx;
          color: #333;
        }
        i {
          margin-left: 26rpx;
          font-size: 24rpx;
          color: #666;
        }
      }
      .right {
        display: flex;
        line-height: 1;
        span {
          font-size: 30rpx;
          color: #DA5998;
        }
      }
    }
    .order-num {
      padding: 0 30rpx;
      // margin-top: 20rpx;
      font-size: 20rpx;
      line-height: 1;
      color: #999;
    }
    .order-item {
      padding: 20rpx 30rpx;
      display: flex;
      // margin-bottom: 20rpx;
      background-color: #fcfcfc;
      // background-color: pink;
      img {
        width: 180rpx;
        height: 180rpx;
        border-radius: 10rpx;
      }
      .m {
        margin-left: 20rpx;
        display: flex;
        flex-direction: column;
        flex: 1;
        .t {
          font-size: 28rpx;
          line-height: 1;
          color: #333;
        }
        .b {
          margin-top: 20rpx;
          font-size: 24rpx;
          line-height: 1;
          color: #666;
        }
      }
      .r {
        margin-left: 20rpx;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        // flex: 1;
        .t {
          font-size: 28rpx;
          line-height: 1;
          color: #333;
        }
        .b {
          margin-top: 20rpx;
          font-size: 24rpx;
          line-height: 1;
          color: #666;
        }
      }
    }
    .oList {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      .item {
        padding: 20rpx 30rpx;
        display: flex;
        justify-content: space-between;
        line-height: 1;
        .l {
          font-size: 28rpx;
          color: #333;
        }
        .r {
          font-size: 28rpx;
          color: #333;
        }
      }
    }
    .pay-tab {
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 20rpx 30rpx 70rpx;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      .wrap {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        // flex-direction: column;
        line-height: 1;
        .t {
          font-size: 28rpx;
          color: #333;
          span {
            color: #B51C66;
          }
        }
        .tip {
          margin-top: 10rpx;
          font-size: 20rpx;
          color: #999;
        }
      }
      .submit {
        padding: 20rpx 50rpx;
        margin-left: 20rpx;
        font-size: 28rpx;
        color: #fff;
        background:linear-gradient(90deg,rgba(210,54,129,1) 0%,rgba(181,28,102,1) 100%);
        border-radius: 34rpx;
        line-height: 1;
      }
    }


    // 公用待码
    // 单选框样式
    radio {
      width: 38rpx;
      .wx-radio-input {
        border-radius: 50%;
        width: 28rpx;
        height: 28rpx;
        &.wx-radio-input-checked {
          &::before {
            border-radius: 50%;
            width: 44rpx;
            height: 44rpx;
            line-height: 44rpx;
            text-align: center;
            font-size: 26rpx; /* 对勾大小 26rpx */
            color:#fff; /* 对勾颜色 */
            background: #DA5998;
            border-color: #DA5998;
          }
        }
      }
    }
  }
}
</style>