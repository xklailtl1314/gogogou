<template>
  <!-- 我的订单-代收货-详情 -->
  <div class="my-wait-receive">
    <!-- 进度详情 -->
    <div class="step-info">
      <div class="top">
        <i class="iconfont icon-wuliu"></i>
        <div class="wrap">
          <span class="tit">等待商家发货</span>
          <!-- <span class="sub">请于29分42秒内付款，超时订单将自动关闭</span> -->
        </div>
      </div>
      <div class="bottom">
        <div class="step complate">买家付款</div>
        <div class="step active">商家发货</div>
        <div class="step">交易完成</div>
      </div>
    </div>

    <!-- 物流信息 -->
    <div class="address-info">
      <i class="iconfont icon-wuliuxinxi"></i>
      <div class="r">
        <div class="t">
          <span class="left">到上海市【上海杨浦区十六部】</span>
          <span class="right">
            <i class="iconfont icon-angle-right"></i>
          </span>
        </div>
        <div class="b">2019-12-04 07:36:20</div>
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
        </div>
      </div>
      <div class="order-item">
        <img src="/static/images/ad.jpg">
        <div class="m">
          <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
          <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
        </div>
        <div class="r">
          <span class="t">¥ 299.00</span>
          <span class="b">x1</span>
          <label class="cancel">申请退款</label>
        </div>

      </div>
      <!-- 小计 -->
      <div class="total-wrap">
        <span>商品小计：</span>
        <span class="price">￥6.9</span>
      </div>

      <div class="oList">
        <div class="item">
          <span class="l">配送方式</span>
          <div class="r">
            <span>免运费</span>
            <span>快递</span>
          </div>
        </div>
        <div class="item">
          <span class="l">买家留言</span>
          <span class="r">无</span>
        </div>
      </div>

      <div class="oList">
        <div class="item">
          <div class="l">
            <span>商品金额</span>
            <span>运费</span>
          </div>
          <div class="r">
            <span>￥6.9</span>
            <span>+￥0.00</span>
          </div>
        </div>
        <div class="item">
          <span class="l">付款方式</span>
          <div class="r">
            <span>微信支付</span>
            <span class="sub">有赞提供资金担保，确保收货后才结算给商家</span>
          </div>
        </div>
        <div class="item right-end">
          <div class="r">
            <span>实付款:</span>
            <span class="price">￥6.9</span>
          </div>
        </div>
        <div class="item">
          <div class="center">
            <i class="iconfont icon-i-message"></i>
            <span>在线客服</span>
          </div>
        </div>
      </div>

      <div class="order-info">
        <div class="item">
          <span class="l">订单编号：</span>
          <div class="r">
            <span>E20191203144345092900003</span>
            <label>复制</label>
          </div>
        </div>
        <div class="item">
          <span class="l">创建时间：</span>
          <div class="r">
            <span>2019-12-03 14:43:45</span>
          </div>
        </div>
        <div class="item">
          <span class="l">付款时间：</span>
          <div class="r">
            <span>2019-12-03 14:44:17</span>
          </div>
        </div>
        <div class="item">
          <span class="l">发货时间：</span>
          <div class="r">
            <span>2019-12-03 17:22:59</span>
          </div>
        </div>
      </div>

    </div>

    <!-- 确认收货 -->
    <button class="btn-submit">确认收货</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  page {
    background-color: #eee;
  }
  .my-wait-receive {
    // 进度详情
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
          color: #b51c66;
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
          &.active {
            color: #b51c66;
            &::before {
              content: '√';
              bottom: -34rpx;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 20rpx;
              height: 20rpx;
              font-size: 12rpx;
              color: #fff;
              background-color: #b51c66;
            }
          }
          &:last-child {
            &::after {
              content: initial;
            }
          }
          &.complate {
            &::before {
              background-color: #b51c66;
            }
            &::after {
              background-color: #b51c66;
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
        flex: 1;
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
      line-height: 1;
      .top {
        padding: 20rpx 30rpx 10rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 1;
        background-color: #fff;
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
        }
      }

      .order-item {
        padding: 20rpx 30rpx;
        display: flex;
        background-color: #fcfcfc;
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
          .cancel {
            margin-top: 36rpx;
            padding: 10rpx 15rpx;
            font-size: 20rpx;
            color: #DA5998;
            border: 1rpx solid currentColor;
            border-radius: 21rpx;
          }
        }
      }
      .total-wrap {
        padding: 40rpx 30rpx;
        display: flex;
        justify-content: flex-end;
        line-height: 1;
        background-color: #fff;
        span {
          font-size: 28rpx;
          color: #484850;
          &.price {
            margin-left: 10rpx;
            color: #DA5998;
          }
        }
      }
      .oList {
        margin-top: 20rpx;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        .item {
          padding: 20rpx 30rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height: 1;
          &:not(:last-child) {
            border-bottom: 1rpx solid #eee;
          }
          .center {
            display: flex;
            flex: 1;
            justify-content: center;
            .iconfont {}
            span {
              margin-left: 15rpx;
            }
          }
          &.right-end {
            justify-content: flex-end;
            .r {
              display: flex;
              flex: 1;
              justify-content: flex-end;
              flex-direction: row;
              span {
                display: flex;
                &.price {
                  margin-left: 20rpx;
                  color: #DA5998;
                }
              }
            }
          }
          .l {
            display: flex;
            flex-direction: column;
            font-size: 28rpx;
            color: #333;
            span {
              &:nth-of-type(2) {
                margin-top: 20rpx;
              }
            }
          }
          .r {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            font-size: 28rpx;
            color: #333;
            span {
              &:nth-of-type(2) {
                margin-top: 20rpx;
              }
              &.sub {
                font-size: 20rpx;
                color: #999;
              }
            }
          }
        }
      }
      .order-info {
        margin-top: 20rpx;
        padding: 10rpx 30rpx;
        line-height: 1;
        background-color: #fff;
        .item {
          padding: 10rpx 0;
          display: flex;
          .l {
            font-size: 24rpx;
            color: #666;
          }
          .r {
            margin-left: 20rpx;
            font-size: 24rpx;
            color: #666;
            label {
              margin-left: 20rpx;
              font-size: 20rpx;
              padding: 10rpx 38rpx;
              border: 1rpx solid #666;
              border-radius: 40rpx;
            }
          }
        }
      }
    }

    .btn-submit {
      margin: 100rpx 30rpx 30rpx;
      height:70rpx;
      font-size: 28rpx;
      color: #fff;
      background:linear-gradient(90deg,rgba(210,54,129,1) 0%,rgba(181,28,102,1) 100%);
      border-radius:35px;
    }
  }
</style>