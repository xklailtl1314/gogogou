<template>
  <!-- 消息详情 -->
  <div class="my-message-detail">
    <div class="item">
      <div class="time">
        <span>昨天：15.00</span>
      </div>
      <div class="info">
        <span class="tit">知道你担心飞粉，所以。。。</span>
        <span class="sub">西华子粉饼粉质太细，唯一的痛点，就是容易飞粉，所以加了{真丝弹性筛网}......隔开粉质，通过按压回弹取粉，能很好的解决容易飞粉的问题......</span>
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
.my-message-detail {
  padding: 0 30rpx;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .time {
      margin-top: 20rpx;
      display: flex;
      justify-content: center;
      line-height: 1;
      span {
        padding: 8rpx 12rpx;
        display: flex;
        font-size: 20rpx;
        color: #fff;
        background-color: #ccc;
        border-radius: 6rpx;
      }
    }
    .info {
      margin-top: 20rpx;
      padding: 20rpx;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 6rpx;
      line-height: 1;
      .tit {
        font-size: 32rpx;
      }
      .sub {
        margin-top: 20rpx;
        font-size: 28rpx;
        color: #333
      }
    }
  }
}
</style>