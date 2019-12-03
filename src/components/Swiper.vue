<template>
  <div class="swiper-wrap">
    <swiper indicator-dots interval="2000" duration="500" autoplay indicator-color="#fff" indicator-active-color="rgba(255,255,255,.3)">
      <block v-for="(item,idx) in swipers" :key="idx">
        <swiper-item>
          <view class="swiper-item">
            <image mode="widthFix" :src="item" />
          </view>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['swipers']
}
</script>

<style lang="scss" scoped>
.swiper-wrap {
  padding: 0 20rpx;
  line-height: 40rpx;
  overflow: hidden;
  swiper {
    height: 240rpx;
    swiper-item {
      image {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
      }
    }
  }
}
</style>