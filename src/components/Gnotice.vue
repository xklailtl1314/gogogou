<template>
  <div class="g-notice" v-if="isnotice">
    <div class="wrap">
      <span class="tit">当前商品可使用</span>
      <label class="link">满399减10店铺优惠券</label>
    </div>
    <i class="iconfont icon-guanbi" @click="closeNotice"></i>
  </div>
</template>

<script>
export default {
  props: ['isnotice'],
  data () {
    return {

    }
  },
  methods: {
    closeNotice () {
      this.$emit('isNoticeShow')
    }
  }
}
</script>

<style lang="scss">
  .g-notice {
    padding: 23rpx 30rpx;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #FFEDF6;
    box-sizing: border-box;
    .wrap {
      display: flex;
      align-items: center;
      .tit {
        font-size: 24rpx;
        color: #666;
      }
      .link {
        margin-left: 10rpx;
        font-size: 24rpx;
        color: #B51C66;
      }
    }
    .iconfont {
      font-size: 24rpx;
      color: #B61D67;
    }
  }
</style>