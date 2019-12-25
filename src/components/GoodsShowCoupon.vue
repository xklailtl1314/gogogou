<template>
  <div class="g-half-screen">
    <view class="page__bd">
      <view :class="['weui-demo-dialog', iscoupon ? 'weui-demo-dialog_show' : '']">
        <view class="weui-mask" @tap="closeDialog"></view>
        <!-- 主体开始 -->
        <view class="weui-half-screen-dialog hs-coupon-wrap">
          <div class="line">
            <span class="title">优惠</span>
          </div>
          <div class="hs-coupon">
            <h4 class="tit">领券</h4>

            <div class="item" @click="useCoupon">
              <div class="l">
                <span class="t">￥<strong>56</strong>首单礼金</span>
                <span class="m">满56.01元可使用</span>
                <span class="b">2019.12.12 00:00至2019.12.12 23:59</span>
              </div>
              <div class="r">
                <span class="tit">{{isUse?'已领取':'立即领取'}}</span>
                <div class="complate" v-if="isUse">
                  <span>已领</span>
                </div>
              </div>
            </div>

            <div class="item" @click="useCoupon">
              <div class="l">
                <span class="t">￥<strong>56</strong>首单礼金</span>
                <span class="m">满56.01元可使用</span>
                <span class="b">2019.12.12 00:00至2019.12.12 23:59</span>
              </div>
              <div class="r">
                <span class="tit">{{isUse?'已领取':'立即领取'}}</span>
                <div class="complate" v-if="isUse">
                  <span>已领</span>
                </div>
              </div>
            </div>


          </div>
        </view>
        <!-- 主体结束 -->
      </view>
    </view>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isUse: false
    }
  },
  props: ['iscoupon'],
  methods: {
    closeDialog () {
      this.$emit('isCoupon') // 调用父方法，关闭half-screen
    }
  },
  computed: {
    useCoupon () {
      console.log('12345')
      this.isUse = true
      return this.isUse
    }
  },
  components: {}
}
</script>

<style lang="scss">
  // 基本
  .weui-demo-dialog {
    visibility:hidden;
    opacity:0;
    transition:all .3s;
    &.weui-demo-dialog_show {
      visibility:visible;
      opacity:1;
      .weui-half-screen-dialog {
        transform:translateY(0);
      }
    }
    .weui-half-screen-dialog {
      transition:all .3s;
      transform:translateY(100%);
    }
  }

  .hs-coupon-wrap {
    padding: 20rpx 30rpx;
    .line {
      padding: 20rpx 0;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      .title {
        font-size: 32rpx;
        color: #333;
      }
    }
    .hs-coupon {
      .tit {
        margin: 20rpx 0;
        font-size: 30rpx;
        line-height: 1;
        color: #666;
      }
      .item {
        padding: 30rpx 40rpx 20rpx;
        display: flex;
        align-items: center;
        height: 194rpx;
        border-radius: 12rpx;
        background:linear-gradient(90deg,rgba(218,89,152,1) 0%,rgba(181,28,102,1) 100%);
        overflow: hidden;
        &:not(:first-child) {
          margin-top: 24rpx;
        }
        .l {
          display: flex;
          flex: 1.76;
          flex-direction: column;
          color: #fff;
          .t {
            display: flex;
            align-items: flex-end;
            font-size: 20rpx;
            strong {
              font-size: 80rpx;
              line-height: 1;
            }
          }
          .m {
            margin-top: 15rpx;
            font-size: 28rpx;
            line-height: 1;
          }
          .b {
            margin-top: 20rpx;
            font-size: 20rpx;
            line-height: 1;
          }
        }
        .r {
          position: relative;
          display: flex;
          flex: 1;
          height: 100%;
          align-items: center;
          justify-content: center;
          border-left: 1rpx dashed #fff;
          .tit {
            font-size: 30rpx;
            color: #fff;
            line-height: 1;
          }
          .complate {
            position: absolute;
            right: -58rpx;
            bottom: -38rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100rpx;
            height: 100rpx;
            border-radius: 50%;
            border: 4rpx solid #FF9ECD;
            span {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 90rpx;
              height: 90rpx;
              font-size: 30rpx;
              color: #FF9ECD;
              border-radius: 50%;
              border: 1rpx solid #FF9ECD;
              transform: rotate(-45deg);
            }
          }
        }
      }
    }
  }
</style>