<template>
  <!-- 退款--已通过 -->
  <div class="refund-pass">
    <!-- 退款头部 -->
    <refundHeader :refundMsg="refundMsg" :refundIcon="refundIcon"></refundHeader>
    <!-- 退款信息 -->
    <div class="refund-info">
      <p class="tit">请将商品快递至如下地址：</p>
      <p class="tit">收件人：aaaaaaaa</p>
      <p class="tit">收件电话：130000000</p>
      <p class="tit">收件地址：AAAAAAAAAAAAAAAAAAAAAA</p>
    </div>
    <div class="refund-info mtop">
      <p class="tit">快递单号：ffffffffffffff</p>
      <p class="tit">收到并验完货后，货款会从原路径退回</p>
    </div>
    <!-- 退款详情、协商记录 -->
    <refundTab></refundTab>
  </div>
</template>

<script>
import refundHeader from '@/components/RefundHeader.vue' // 头部组件
import refundTab from '@/components/RefundTab.vue' // tab切换组件
export default {
  data () {
    return {
      refundMsg: '您的退款申请已通过', // 头部传值
      refundIcon: 1 // 头部
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
  .refund-pass {
    .refund-info {
      padding: 30rpx;
      background-color: #fff;
      &.mtop {
        margin-top: 20rpx;
      }
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
  }
</style>