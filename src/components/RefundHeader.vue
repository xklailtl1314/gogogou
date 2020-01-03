<template>
  <!-- 退款头部 -->
  <div class="refund-header">
    <div class="wrap">
      <i :class="['iconfont', iconActive]"></i>
      <span class="tit">{{refundMsg}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['refundMsg', 'refundIcon'],
  computed: {
    iconActive () { // 父传子1返打钩，否则感叹号
      return this.refundIcon == 1 ? 'icon-dagou1' : 'icon-gantanhao'
    }
  }
}
</script>

<style lang="scss">
  // 退款头部
  .refund-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 146rpx;
    background:linear-gradient(90deg,rgba(218,89,152,1),rgba(181,28,102,1));
    .wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      .iconfont {
        font-size: 40rpx;
        color: #fff;
      }
      .tit {
        margin-left: 20rpx;
        font-size: 30rpx;
        color: #fff;
      }
    }
  }
</style>