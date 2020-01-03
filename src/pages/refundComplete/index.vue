<template>
  <!-- 退款--完成 -->
  <div class="refund-complete">
    <!-- 退款头部 -->
    <refundHeader :refundMsg="refundMsg" :refundIcon="refundIcon"></refundHeader>

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
      refundMsg: '您的退款已经完成', // 头部传值
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
.refund-complete {
}
</style>