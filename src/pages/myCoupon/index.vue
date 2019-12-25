<template>
  <div class="my-coupon">
    <div class="screenTab">
      <div class="tab-title">
        <div class="item" @click="cur=0" :class="{active:cur==0}">
          <span>未使用</span>
        </div>
        <div class="item" @click="cur=1" :class="{active:cur==1}">
          <span>已使用</span>
        </div>
        <div class="item" @click="cur=2" :class="{active:cur==2}">
          <span>已过期</span>
        </div>
      </div>
      <div class="tab-content">
        <div v-show="cur==0">
          <div class="content not-used">
            <!-- 搜索框 -->
            <div class="line">
              <div class="search-wrap">
                <div class="wrap">
                  <input
                    type="text"
                    placeholder="请输入兑换码"
                    placeholder-style="color: #ccc"
                    @change="clearSearch"
                    v-model="oText">
                  <i class="iconfont icon-quxiao" v-show="oText.length > 0"></i>
                </div>
              </div>
              <button :class="['btn-submit', oText.length > 0?'active':'']">兑换</button>
            </div>
            <!-- 优惠券 -->
            <navigator class="item-coupon" v-for="(item, idx) in oList" :key="idx" url="../myCouponToUsed/main">
              <div class="t">
                <div class="l">
                  <div class="wrap">
                    ￥<span>{{item.price}}</span>
                  </div>
                  <span class="tit">无金额门槛</span>
                </div>
                <div class="r">
                  <div class="line">
                    <span class="tip">现金券</span>
                    <span class="title">{{item.title}}</span>
                  </div>
                  <div class="line">
                    <span class="time">{{item.startTime}}至{{item.endTime}}</span>
                    <span class="btn">立即使用</span>
                  </div>
                </div>
              </div>
              <div class="b">
                <span class="ad">仅限购买工厂店商品</span>
                <i class="iconfont icon-arrow-bottom_s"></i>
              </div>
            </navigator>
            <!-- 兑换链接按钮 -->
            <button class="btn-exchange">用咕咕豆兑换几张吧~</button>
          </div>
        </div>
        <div v-show="cur==1">
          <div class="content be-used">
            <!-- 优惠券 -->
            <div class="item-coupon">
              <div class="t">
                <div class="l">
                  <div class="wrap">
                    ￥<span>10</span>
                  </div>
                  <span class="tit">无金额门槛</span>
                </div>
                <div class="r">
                  <div class="line">
                    <span class="tip">现金券</span>
                    <span class="title">纯露化妆水无门槛10元券</span>
                  </div>
                  <div class="line">
                    <span class="time">2018.04.11至2018.05.11</span>
                    <span class="btn">已使用</span>
                  </div>
                </div>
              </div>
              <div class="b">
                <span class="ad">仅限购买工厂店商品</span>
                <i class="iconfont icon-arrow-bottom_s"></i>
              </div>
            </div>
          </div>
        </div>
        <div v-show="cur==2">
          <div class="content expired">
            <div class="empty">
              <img src="/static/images/coupon.png">
              <span>还没有券哦~</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from '@/utils/index.js'
import api from '@/../config/api.js'
export default {
  data () {
    return {
      cur: 0, // tab切换
      oText: '', // 搜索框
      oList: [ // 现金券
        {
          price: '10',
          title: '可口可乐旗下品牌无门槛券',
          startTime: '2019-12-20',
          endTime: '2019-12-30'
        },
        {
          price: '20',
          title: '罗技旗舰键鼠套装优惠券',
          startTime: '2019-12-21',
          endTime: '2019-12-25'
        },
        {
          price: '15',
          title: '玛莎拉蒂旗下车辆券',
          startTime: '2019-12-20',
          endTime: '2019-12-30'
        }
      ]
    }
  },
  components: {},
  methods: {
    clearSearch () { // 清除输入框搜索
      this.oText = ''
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.screenTab {
  .tab-title {
    padding: 20rpx 30rpx;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    .item {
      padding: 0 15rpx 20rpx;
      display: flex;
      &.active {
        color: #b61c65;
        border-bottom: 4rpx solid #B51C66;
      }
      span {
        font-size: 30rpx;
        line-height: 1;
        color: #333;
      }
    }
  }
  .tab-content {
    background-color: #fff;
    .content {
      position: relative;
      padding: 0 30rpx 20rpx;
      height: calc(100vh - 48rpx);
      // 搜索框
      .line {
        margin-bottom: 20rpx;
        display: flex;
        .search-wrap {
          padding: 0;
          display: flex;
          background-color: #fff;
          .wrap {
            position: relative;
            margin: 0;
            display: flex;
            align-items: center;
            width: 470rpx;
            height: 70rpx;
            border-radius: 35rpx;
            background-color: #eee;
            overflow: hidden;
            input {
              padding: 0 24rpx;
              width: 100%;
              font-size: 26rpx;
            }
            .icon-quxiao {
              padding: 0 30rpx;
              font-size: 30rpx;
              color: #808084;
            }
          }
        }
        .btn-submit {
          margin-left: 20rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200rpx;
          height: 70rpx;
          border-radius: 35rpx;
          font-size: 30rpx;
          line-height: 1;
          color: #fff;
          background-color: #ccc;
          &.active {
            background-color: #b51c66;
          }
        }
      }
      // 优惠券
      .item-coupon {
        margin-bottom: 20rpx;
        display: flex;
        flex-direction: column;
        background:rgba(253,245,245,1);
        border: 1rpx solid #FAEBEB;
        border-radius: 10rpx;
        .t {
          display: flex;
          border-bottom: 2rpx dashed #FAEBEB;
          .l {
            padding: 30rpx 20rpx 30rpx 40rpx;
            display: flex;
            align-items: center;
            flex-direction: column;
            .wrap {
              font-size: 24rpx;
              line-height: 1;
              color: #333;
              span {
                font-size: 80rpx;
              }
            }
            .tit {
              margin-top: 10rpx;
              font-size: 28rpx;
              line-height: 1;
              color: #333;
            }
          }
          .r {
            padding: 40rpx 40rpx 20rpx 20rpx;
            flex: 1;
            border-left: 2rpx dashed #FAEBEB;
            .line {
              display: flex;
              align-items: center;
              justify-content: space-between;
              &:not(:first-child) {
                margin-top: 15rpx;
              }
              .tip {
                padding: 10rpx;
                font-size: 22rpx;
                line-height: 1;
                color: #fff;
                background:linear-gradient(-90deg,rgba(181,28,102,1) 0%,rgba(218,89,152,1) 100%);
                border-radius: 6rpx;
              }
              .title {
                margin-left: 15rpx;
                width: 310rpx;
                font-size: 28rpx;
                color: #333;
              }
              .time {
                font-size: 20rpx;
                color: #999;
              }
              .btn {
                padding: 16rpx 22rpx;
                font-size: 22rpx;
                line-height: 1;
                color: #fff;
                border-radius: 26rpx;
                background:linear-gradient(-90deg,rgba(181,28,102,1) 0%,rgba(218,89,152,1) 100%);
              }
            }
          }
        }
        .b {
          padding: 30rpx 44rpx;
          display: flex;
          justify-content: space-between;
          line-height: 1;
          .ad {
            font-size: 24rpx;
            line-height: 1;
            color: #333;
          }
          .iconfont {
            font-size: 30rpx;
            color: #999;
          }
        }
      }
      // 兑换链接按钮
      .btn-exchange {
        margin-top: 40rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 72rpx;
        font-size: 28rpx;
        color: #666;
        border-radius: 36rpx;
        border: 1rpx solid #B5B5BF;
      }
      &.be-used {
        // 优惠券
        .item-coupon {
          background: #ccc;
          .t {
            border-bottom: 2rpx dashed #C6C4C4;
            .r {
              border-left: 2rpx dashed #C6C4C4;
              .line {
                .tip {
                  display: none;
                }
                .btn {
                  padding: 0;
                  font-size: 20rpx;
                  line-height: 1;
                  color: #999;
                  border: 0;
                  background: initial;
                }
              }
            }
          }
        }
      }
      .empty {
        // display: none;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        img {
          width: 150rpx;
          height: 150rpx;
        }
        span {
          margin-top: 50rpx;
          font-size: 26rpx;
          color: #666;
        }
      }
    }
  }
}
</style>