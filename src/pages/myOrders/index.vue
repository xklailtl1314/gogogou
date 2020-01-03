<template>
  <!-- 我的订单 -->
  <div class="my-orders">
    <div class="screenTab">
      <scroll-view class="tab-title" scroll-x>
        <view class="item" @click="cur=idx" :class="{active:cur==idx}" v-for="(item, idx) in oList" :key="idx">
          <span>{{item}}</span>
        </view>
      </scroll-view>

      <div class="tab-content">
        <!-- 全部 -->
        <div v-show="cur==0">
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
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </div>
            <div class="total">
              <span>共1件商品 合计：</span>
              <span class="r">￥6.9</span>
            </div>
            <div class="bottom">
              <span class="cancel">取消订单</span>
              <span class="submit">确认付款</span>
            </div>
          </div>
        </div>
        <!-- 待付款 -->
        <div v-show="cur==1" class="wait-pay">
          <div class="shop">
            <div class="top">
              <div class="left">
                <radio-group class="radio-group" @change="changeRadio">
                  <label class="radio">
                    <radio></radio>
                  </label>
                </radio-group>

                <img src="/static/images/g-icon2.png">
                <span>雷蛇官方旗舰店</span>
                <i class="iconfont icon-angle-right"></i>
              </div>
              <div class="right">
                <span>等待买家付款</span>
              </div>
            </div>
            <span class="order-num">订单编号：EF201912055521492158129</span>
            <navigator class="order-item" hover-class="none" url="../myOrdersWaitPay/main">
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </navigator>
            <div class="total">
              <span>共1件商品 合计：</span>
              <span class="r">￥6.9</span>
            </div>
            <div class="bottom">
              <span class="cancel">取消订单</span>
              <span class="submit">确认付款</span>
            </div>
            <!-- 底部栏 -->
            <div class="pay-tab">
              <div class="left">
                <radio-group class="radio-group" @change="changeRadio">
                  <label class="radio">
                    <radio></radio> <span>全选</span>
                  </label>
                </radio-group>
              </div>
              <div class="right">
                <div class="wrap">
                  <div class="t">
                    合计：<span>¥ 6.9</span>
                  </div>
                  <span class="tip">（含运费￥0）</span>
                </div>
                <span class="submit">确认付款</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 待发货 -->
        <div v-show="cur==2">
          <div class="shop">
            <div class="top">
              <div class="left">
                <img src="/static/images/g-icon2.png">
                <span>雷蛇官方旗舰店</span>
                <i class="iconfont icon-angle-right"></i>
              </div>
              <div class="right">
                <span>买家已付款</span>
              </div>
            </div>
            <span class="order-num">订单编号：EF201912055521492158129</span>
            <div class="order-item" @click="goToWaitShip">
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </div>
            <div class="total">
              <span>共1件商品 合计：</span>
              <span class="r">￥6.9</span>
            </div>
            <div class="bottom">
              <span class="cancel">查看物流</span>
              <span class="submit">确认收货</span>
            </div>
          </div>
        </div>
        <!-- 待收货 -->
        <div v-show="cur==3">
          <div class="shop">
            <div class="top">
              <div class="left">
                <img src="/static/images/g-icon2.png">
                <span>雷蛇官方旗舰店</span>
                <i class="iconfont icon-angle-right"></i>
              </div>
              <div class="right">
                <span>买家已付款</span>
              </div>
            </div>
            <span class="order-num">订单编号：EF201912055521492158129</span>
            <div class="order-item" @click="goToWaitRecive">
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </div>
            <div class="total">
              <span>共1件商品 合计：</span>
              <span class="r">￥6.9</span>
            </div>
            <div class="bottom">
              <span class="cancel" @click="goToLogistics">查看物流</span>
              <span class="submit">确认收货</span>
            </div>
          </div>
        </div>
        <!-- 待评价 -->
        <div v-show="cur==4">
          <div class="shop">
            <div class="top">
              <div class="left">
                <img src="/static/images/g-icon2.png">
                <span>雷蛇官方旗舰店</span>
                <i class="iconfont icon-angle-right"></i>
              </div>
              <div class="right">
                <span>买家已付款</span>
              </div>
            </div>
            <span class="order-num">订单编号：EF201912055521492158129</span>
            <div class="order-item" @click="goToWaitRecive">
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </div>
            <div class="total">
              <span>共1件商品 合计：</span>
              <span class="r">￥6.9</span>
            </div>
            <div class="bottom">
              <span class="cancel" @click="goToLogistics">查看物流</span>
              <span class="submit" @click="goToComment">评价商品</span>
            </div>
          </div>
        </div>
        <!-- 退款/售后 -->
        <div v-show="cur==5">
          <!-- 审核中 -->
          <div class="shop">
            <div class="top">
              <div class="left">
                <img src="/static/images/g-icon2.png">
                <span>雷蛇官方旗舰店</span>
                <i class="iconfont icon-angle-right"></i>
              </div>
              <div class="right">
                <span>审核中</span>
              </div>
            </div>
            <span class="order-num">订单编号：EF201912055521492158129</span>
            <div class="order-item" @click="goToWaitRecive">
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </div>
            <div class="total">
              <span>退款金额：</span>
              <span class="r">￥6.9</span>
            </div>
          </div>
          <!-- 审核失败 -->
          <div class="shop">
            <div class="top">
              <div class="left">
                <img src="/static/images/g-icon2.png">
                <span>雷蛇官方旗舰店</span>
                <i class="iconfont icon-angle-right"></i>
              </div>
              <div class="right">
                <span>审核失败</span>
              </div>
            </div>
            <span class="order-num">订单编号：EF201912055521492158129</span>
            <div class="order-item" @click="goToWaitRecive">
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </div>
            <div class="total">
              <span>退款金额：</span>
              <span class="r">￥6.9</span>
            </div>
          </div>
          <!-- 审核成功 -->
          <div class="shop">
            <div class="top">
              <div class="left">
                <img src="/static/images/g-icon2.png">
                <span>雷蛇官方旗舰店</span>
                <i class="iconfont icon-angle-right"></i>
              </div>
              <div class="right">
                <span>审核成功</span>
              </div>
            </div>
            <span class="order-num">订单编号：EF201912055521492158129</span>
            <div class="order-item" @click="goToWaitRecive">
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </div>
            <div class="total">
              <span>退款金额：</span>
              <span class="r">￥6.9</span>
            </div>
          </div>
          <!-- 退款中 -->
          <div class="shop">
            <div class="top">
              <div class="left">
                <img src="/static/images/g-icon2.png">
                <span>雷蛇官方旗舰店</span>
                <i class="iconfont icon-angle-right"></i>
              </div>
              <div class="right">
                <span>退款中</span>
              </div>
            </div>
            <span class="order-num">订单编号：EF201912055521492158129</span>
            <div class="order-item" @click="goToWaitRecive">
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </div>
            <div class="total">
              <span>退款金额：</span>
              <span class="r">￥6.9</span>
            </div>
          </div>
          <!-- 退款完成 -->
          <div class="shop">
            <div class="top">
              <div class="left">
                <img src="/static/images/g-icon2.png">
                <span>雷蛇官方旗舰店</span>
                <i class="iconfont icon-angle-right"></i>
              </div>
              <div class="right">
                <span>退款完成</span>
              </div>
            </div>
            <span class="order-num">订单编号：EF201912055521492158129</span>
            <div class="order-item" @click="goToWaitRecive">
              <img src="/static/tmp/b005.jpg">
              <div class="m">
                <span class="t">Razer 雷蛇|宝可梦 皮卡丘限定款鼠标+鼠标垫套装科奥</span>
                <span class="b">皮卡丘鼠标+皮卡丘鼠标垫 套装；官方标配</span>
              </div>
              <div class="r">
                <span class="t">¥ 299.00</span>
                <span class="b">x1</span>
              </div>
            </div>
            <div class="total">
              <span>退款金额：</span>
              <span class="r">￥6.9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cur: 0, // tab切换
      oList: ['全部', '待付款', '待发货', '待收货', '待评价', '退款/售后'],
      oContent: []
    }
  },
  methods: {
    goToComment () { // 商品评价
      wx.navigateTo({
        url: '../myGoodsComment/main'
      })
    },
    goToLogistics () { // 待收货-查看物流
      wx.navigateTo({
        url: '../myOrdersLogistics/main'
      })
    },
    goToWaitShip () { // 待发货-详情
      wx.navigateTo({
        url: '../myWaitShip/main'
      })
    },
    goToWaitRecive () { // 待收货-详情
      wx.navigateTo({
        url: '../myWaitReceive/main'
      })
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.my-orders {
  .screenTab {
    // nav头部
    .tab-title {
      padding: 20rpx 30rpx 0;
      width: 750rpx;
      background-color: #fff;
      box-sizing: border-box;
      white-space: nowrap;
      .item {
        padding: 0 15rpx 16rpx;
        display: inline-block;
        &:not(:first-child) {
          margin-left: 40rpx;
        }
        &.active {
          border-bottom: 4rpx solid #B51C66;
          span {
            color: #b61c65;
          }
        }
        span {
          font-size: 30rpx;
          line-height: 1;
          color: #333;
        }
      }
    }
    // 主体
    .tab-content {
      .wait-pay {
        padding-bottom: 160rpx;
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
        .total {
          padding: 40rpx 30rpx;
          display: flex;
          justify-content: flex-end;
          span {
            font-size: 28rpx;
            color: #333;
            &.r {
              color: #DA5998;
            }
          }
        }
        .bottom {
          padding: 20rpx 30rpx;
          display: flex;
          justify-content: flex-end;
          background-color: #fff;
          span {
            padding: 15rpx 20rpx;
            font-size: 30rpx;
            color: #666;
            border: 1rpx solid currentColor;
            border-radius: 32rpx;
            &.cancel {}
            &.submit {
              margin-left: 20rpx;
              color: #DA5998;
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
          justify-content: space-between;
          width: 100%;
          background-color: #fff;
          box-sizing: border-box;
          .left {
            .radio {
              span {
                font-size: 30rpx;
                color: #333;
              }
            }
          }
          .right {
            display: flex;
            .wrap {
              display: flex;
              flex-direction: column;
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
              color: #999;
              background-color: #ccc;
              border-radius: 34rpx;
              line-height: 1;
            }
          }
        }
      }
    }
  }
}

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
</style>