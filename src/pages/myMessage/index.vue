<template>
  <!-- 我的消息 -->
  <div class="my-message">
    <navigator class="item" url="../myMessageDetail/main">
      <div class="l">
        <i class="iconfont icon-laba"></i>
        <div class="m">
          <span class="tit">我的消息</span>
          <span class="sub">签到金币即将清零</span>
        </div>
      </div>
      <span class="time">昨天</span>
    </navigator>

    <navigator class="item" url="../myMessageDetail/main">
      <div class="l">
        <i class="iconfont icon-gift"></i>
        <div class="m">
          <span class="tit">我的消息</span>
          <span class="sub">签到金币即将清零</span>
        </div>
      </div>
      <span class="time">昨天</span>
    </navigator>

    <navigator class="item" url="../myMessageDetail/main">
      <div class="l">
        <i class="iconfont icon-laba"></i>
        <div class="m">
          <span class="tit">我的消息</span>
          <span class="sub">签到金币即将清零</span>
        </div>
      </div>
      <span class="time">昨天</span>
    </navigator>
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
  .my-message {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .item {
      margin-left: 30rpx;
      padding: 20rpx 30rpx 20rpx 0;
      display: flex;
      justify-content: space-between;
      // flex-direction: column;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom: 1rpx solid #eee;
      .l {
        display: flex;
        .iconfont {
          padding: 15rpx;
          font-size: 50rpx;
          line-height: 1;
          color: #fff;
          border-radius: 10rpx;
          &.icon-laba {
            background-color: #42AAFD;
          }
          &.icon-gift {
            background-color: #B51C66;
          }
        }
        .m {
          margin-left: 20rpx;
          display: flex;
          flex-direction: column;
          line-height: 1;
          .tit {
            font-size: 30rpx;
            color: #333;
          }
          .sub {
            margin-top: 20rpx;
            font-size: 24rpx;
            color: #999
          }
      }
      }
      .time {
        font-size: 24rpx;
        color: #999;
      }
    }
  }
</style>