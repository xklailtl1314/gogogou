<template>
  <div class="price-wrap">
    <img src="/static/images/miaosha.jpg" class="bg">
    <div class="left">
      <img src="/static/images/g-icon.png" class="icon">
      <div class="r">
        <div class="top">
          <span>￥</span>
          <span class="price">1399</span>
        </div>
        <div class="bottom">
          <del>￥1780</del>
        </div>
      </div>
    </div>
    <div class="right">
      <span>距结束还剩:</span>
      <downTime :endTime="msg" :sTime="sTime" :endMsg="endMsg"></downTime>
    </div>
  </div>
</template>

<script>
import downTime from '@/components/DownTime.vue' // 倒计时
export default {
  data () {
    return {
      msg: new Date('2019-12-19 12:00:00').getTime(),
      sTime: new Date('2019-12-19 10:00:00').getTime(),
      endMsg: '倒计时结束'
    }
  },
  components: {
    downTime
  }
}
</script>

<style lang="scss">
.price-wrap {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 114rpx;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 114rpx;
  }
  .left {
    margin-left: 30rpx;
    display: flex;
    align-items: center;
    .icon {
      display: flex;
      width: 75rpx;
      height: 75rpx;
    }
    .r {
      margin-left: 24rpx;
      display: flex;
      flex-direction: column;
      .top {
        color: #fff;
        line-height: 1;
        span {
          font-size: 23rpx;
          &.price {
            font-size: 50rpx;
            font-weight: 800;
          }
        }
      }
      .bottom {
        margin-top: 14rpx;
        line-height: 1;
        del {
          font-size: 26rpx;
          color: #fff;
          text-decoration: line-through;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 174rpx;
    span {
      font-size: 20rpx;
      color: #b51c66;
    }
    .downTime-wrapper {
      margin-top: 12rpx;
      padding: 0 2rpx;
      font-size: 24rpx;
      line-height: 1;
      .hour,
      .minute,
      .second {
        padding: 2rpx 4rpx;
        background-color: #b7246b;
        border-radius: 4rpx;
        color: #fff;
      }
      .second {
        color: #fff;
      }
      .dot {
        padding: 0 2rpx;
        // background-color: #fff;
        color: #b7246b;
      }
    }
  }
}
</style>