<template>
  <!-- 订单详情 -->
  <div class="order-details">
    <div class="top">
      <!-- 背景信息 -->
      <div class="bg-info">
        <div class="l">
          <span class="tit">等待买家付款</span>
          <span class="sub">剩29分钟自动关闭</span>
        </div>
        <div class="r">
          <img src="/static/images/ad.jpg">
        </div>
      </div>
      <!-- 用户信息 -->
      <div class="user-info">
        <div class="l">
          <i class="iconfont icon-dizhi"></i>
        </div>
        <div class="r">
          <div class="t">
            <span class="name">李三贵</span>
            <span class="phone">86-15876503636</span>
          </div>
          <span class="address">广东省 广州市 白云区 泰和镇太和镇夏良村永胜路南胜工业区6号之2附近 </span>
        </div>
      </div>
      <!-- 商品列 -->
      <div class="shop">
        <div class="top">
          <img src="/static/images/g-icon2.png">
          <span>雷蛇官方旗舰店</span>
          <i class="iconfont icon-angle-right"></i>
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
          </div>
        </div>
        <div class="list">
          <div class="line">
            <span>配送方式</span>
            <div class="r">
              <span>快递 ¥ 10.00</span>
              <i class="iconfont icon-angle-right"></i>
            </div>
          </div>
          <div class="line">
            <span>优惠信息</span>
            <div class="r">
              <span>不使用</span>
              <i class="iconfont icon-angle-right"></i>
            </div>
          </div>
          <div class="line">
            <span>买家留言：</span>
            <div class="r">
              <span>点击给卖家留言</span>
              <i class="iconfont icon-angle-right"></i>
            </div>
          </div>
          <div class="line">
            <span>开具发票</span>
            <div class="r">
              <span>本次不开具发票</span>
              <i class="iconfont icon-angle-right"></i>
            </div>
          </div>
        </div>
        <div class="bottom">
          <span>小计</span>
          <div class="r">
            <span>¥ 408.00</span>
            <i class="iconfont icon-angle-right"></i>
          </div>
        </div>
      </div>
      <!-- 抵扣 -->
      <div class="deduction">
        <span>全场满200减20</span>
        <div class="r">
          <span>减40</span>
          <i class="iconfont icon-angle-right"></i>
        </div>
      </div>
      <!-- 合计 -->
      <div class="pay-wrap">
        <span class="total">合计：</span>
        <span class="price">¥ 477.00</span>
        <button>提交订单</button>
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
  background-color: #eee;
}
.order-details {
  .top {
    .bg-info {
      padding: 0 30rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 200rpx;
      background:linear-gradient(90deg,rgba(218,89,152,1),rgba(181,28,102,1));
      .l {
        // margin-left: 100rpx;
        display: flex;
        flex-direction: column;
        .tit {
          font-size: 30rpx;
          line-height: 1;
          color: #fff;
        }
        .sub {
          margin-top: 10rpx;
          font-size: 20rpx;
          line-height: 1;
          color: #fff;
        }
      }
      .r {
        display: flex;
        line-height: 1;
        img {
          height: 150rpx;
          width: 190rpx;
        }
      }
    }
    .user-info {
      padding: 40rpx 30rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #fff;
      .l {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60rpx;
        height: 60rpx;
        border-radius: 50%;
        background:linear-gradient(90deg,rgba(218,89,152,1),rgba(181,28,102,1));
        .iconfont {
          font-size: 36rpx;
          color: #fff;
        }
      }
      .r {
        margin-left: 30rpx;
        display: flex;
        flex-direction: column;
        flex: 1;
        .t {
          line-height: 1;
          .name {
            font-size: 26rpx;
            color: #333;
          }
          .phone {
            margin-left: 20rpx;
            font-size: 26rpx;
            color: #666;
          }
        }
        .address {
          margin-top: 20rpx;
          font-size: 26rpx;
          line-height: 1.2;
          color: #333;
        }
      }
    }
    .shop {
      margin-top: 20rpx;
      padding: 0 30rpx;
      background-color: #fff;
      .top {
        padding: 20rpx 0;
        display: flex;
        align-items: center;
        line-height: 1;
        img {
          width: 66rpx;
          height: 26rpx;
          border-radius: 10rpx;
        }
        span {
          margin-left: 20rpx;
          font-size: 24rpx;
          color: #333;
        }
        i {
          margin-left: 26rpx;
          font-size: 24rpx;
          color: #666;
        }
      }
      .order-item {
        // margin-top: 10rpx;
        display: flex;
        margin-bottom: 20rpx;
        // &:not(:first-child) {
        //   margin-top: 20rpx;
        // }
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
      .list {
        display: flex;
        flex-direction: column;
        .line {
          padding: 20rpx 0;
          display: flex;
          justify-content: space-between;
          line-height: 1;
          border-bottom: 1rpx solid #EFEFF4;
          span {
            margin-left: 70rpx;
            font-size: 28rpx;
            color: #333;
          }
          .r {
            display: flex;
            span {
              font-size: 28rpx;
              color: #333;
            }
            .iconfont {
              margin-left: 10rpx;
              font-size: 28rpx;
              color: #333;
            }
          }
        }
      }
      .bottom {
        padding: 20rpx 0;
        display: flex;
        justify-content: space-between;
        line-height: 1;
        span {
          font-size: 30rpx;
          color: #333;
        }
        .r {
          display: flex;
          line-height: 1;
          span {
            font-size: 28rpx;
            color: #333;
          }
          .iconfont {
            margin-left: 10rpx;
            font-size: 28rpx;
            color: #333;
          }
        }
      }
    }
    .deduction {
      margin-top: 20rpx;
      padding: 20rpx 30rpx;
      display: flex;
      justify-content: space-between;
      line-height: 1;
      background-color: #fff;
      span {
        font-size: 28rpx;
        color: #333;
      }
      .r {
        display: flex;
        line-height: 1;
        span {
          font-size: 28rpx;
          color: #666;
        }
        .iconfont {
          font-size: 28rpx;
          color: #666;
        }
      }
    }
    .pay-wrap {
      margin-top: 20rpx;
      padding: 20rpx 30rpx;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      line-height: 1;
      background-color: #fff;
      .total {
        font-size: 28rpx;
        color: #333;
      }
      .price {
        margin-left: 20rpx;
        font-size: 28rpx;
        color: #b51c66;
      }
      button {
        margin: 0 0 0 20rpx;
        width: 210rpx;
        height: 70rpx;
        font-size: 28rpx;
        color: #FFFEFE;
        background:linear-gradient(90deg,rgba(210,54,129,1) 0%,rgba(181,28,102,1) 100%);
        border-radius:35rpx;
      }
    }
  }
}
</style>