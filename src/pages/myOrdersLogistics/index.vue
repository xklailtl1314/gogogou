<template>
  <!-- 我的订单-待收货-查看物流 -->
  <div class="my-orders-logistics">
    <div class="top">
      <img src="/static/images/ad.jpg">
      <div class="wrap">
        <div class="t">
          <span>物流状态：</span>
          <span class="r">运输中</span>
        </div>
        <div class="b">
          <span>共一件商品，由【百世快递】承运</span>
          <span>订单编号：EF201912055521492158129</span>
        </div>
      </div>
    </div>

    <div class="time-step">
      <div class="item">
        <span class="info">到上海市【上海杨浦区十六部】</span>
        <span class="date">2019-12-04   07:36:20</span>
      </div>
      <div class="item">
        <span class="info">上海市【上海嘉定转运中心】，正在发往【上海杨浦区十六部】</span>
        <span class="date">2019-12-04   03:58:04</span>
      </div>
      <div class="item">
        <span class="info">到上海市【上海嘉定转运中心】</span>
        <span class="date">2019-12-04   03:18:25</span>
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
  .my-orders-logistics {
    .top {
      padding: 20rpx 30rpx;
      display: flex;
      background-color: #fff;
      img {
        width: 130rpx;
        height: 130rpx;
        border-radius: 10rpx;
      }
      .wrap {
        margin-left: 20rpx;
        display: flex;
        flex: 1;
        flex-direction: column;
        .t {
          display: flex;
          line-height: 1;
          span {
            font-size: 28rpx;
            color: #333;
            &.r {
              margin-left: 20rpx;
              color: #B51C66;
            }
          }
        }
        .b {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          // justify-content: space-between;
          line-height: 1;
          span {
            font-size: 20rpx;
            color: #999;
            &:not(:first-child) {
              margin-top: 10rpx;
            }
          }
        }
      }
    }

    .time-step {
      margin-top: 20rpx;
      padding: 20rpx 0 20rpx 96rpx;
      background-color: #fff;
      .item {
        position: relative;
        padding: 20rpx 0;
        display: flex;
        flex-direction: column;
        line-height: 1;
        &:nth-of-type(1) {
          &::before {
            content: '√';
            position: absolute;
            left: -58rpx;
            font-size: 14rpx;
            text-align: center;
            line-height: 20rpx;
            width: 24rpx;
            height: 24rpx;
            color: #fff;
            border-radius: 50%;
            background-color: #B51C66;
          }
          .date,
          .info {
            color: #B51C66 !important;
          }
        }
        &:last-child {
          &::after {
            content: initial;
          }
        }
        &::before {
          content: '';
          position: absolute;
          left: -53rpx;
          width: 14rpx;
          height: 14rpx;
          border-radius: 50%;
          background-color: #eee;
        }
        &::after {
          content: '';
          position: absolute;
          top: 30rpx;
          left: -48rpx;
          height: 100%;
          width: 3rpx;
          background-color: #eee;
        }
        &:not(:last-child) {
          border-bottom: 1rpx solid #eee;
        }
        span {
          &.info {
            padding-right: 30rpx;
            font-size: 28rpx;
            line-height: 1.2;
            color: #999;
          }
          &.date {
            margin-top: 20rpx;
            font-size: 20rpx;
            color: #999;
          }
        }
      }
    }
  }
</style>