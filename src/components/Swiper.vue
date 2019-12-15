<template>
  <div class="swiper-wrap">
    <div class="bg"></div>
    <div class="wrap">
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
  </div>
</template>

<script>
export default {
  props: ['swipers']
}
</script>

<style lang="scss" scoped>
.swiper-wrap {
  position: relative;
  .bg {
    position: absolute;
    height: 153rpx;
    width: 100%;
    background-color: #b51c66;
  }
  .wrap {
    padding: 24rpx 30rpx 0;
    // line-height: 10rpx;
    background-color: #fff;
    swiper {
      height: 306rpx;
      width: 690rpx;
      border-radius: 10rpx;
      overflow: hidden;
      swiper-item {
        image {
          width: 100%;
        }
      }
    }
  }
}
</style>