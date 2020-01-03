<template>
  <div class="refund-progress">
    <!-- 退款头部 -->
    <refundHeader :refundMsg="refundMsg" :refundIcon="refundIcon"></refundHeader>
    <!-- 退款信息 -->
    <div class="refund-info">
      <p class="tit">如商家同意：申请将达成并退款给买家</p>
      <span class="sub">如商家拒绝：买家需要重新修改退款申请或申请维权</span>
      <div class="wrap">
        若您在
        <span class="time">03天12小时59分59秒</span>
        内未重新申请，则该退款自动关闭。
      </div>
    </div>
    <!-- 退款详情、协商记录 -->
    <refundTab></refundTab>
    <!-- 按钮组 -->
    <div class="refund-btn-wrap">
      <div class="btn active">撤销退款申请</div>
    </div>

  </div>
</template>

<script>
import refundHeader from '@/components/RefundHeader.vue' // 头部组件
import refundTab from '@/components/RefundTab.vue' // tab切换组件
export default {
  data () {
    return {
      refundMsg: '您的退款申请未通过', // 头部传值
      refundIcon: 2 // 头部
    }
  },
  components: {
    refundHeader,
    refundTab
  }
}
</script>

<style lang="scss">
page {
  background-color: #eee;
}
.refund-progress {
  .refund-info {
    padding: 30rpx;
    background-color: #fff;
    .tit {
      font-size: 26rpx;
      color: #333;
    }
    .sub {
      margin-top: 20rpx;
      font-size: 26rpx;
      color: #333;
    }
    .wrap {
      margin-top: 50rpx;
      font-size: 24rpx;
      color: #666;
      .time {
        margin: 0 10rpx;
        color: #DA5998;
      }
    }
  }

  .refund-btn-wrap {
    margin-top: 120rpx;
    .btn {
      margin: 30rpx 30rpx 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28rpx;
      line-height: 1;
      color: #fff;
      height: 70rpx;
      border-radius: 35rpx;
      background-color: #999;
      &.active {
        background:linear-gradient(90deg,rgba(210,54,129,1) 0%,rgba(181,28,102,1) 100%);
      }
      &.kefu {
        margin-bottom: 60rpx;
      }
    }
  }
}
</style>