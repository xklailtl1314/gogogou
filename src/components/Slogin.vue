<template>
  <div>
    <ul class="slogan">
      <li>
        <image src="/static/images/crown.png" />
        <span>人工优选</span>
      </li>
      <li>
        <image src="/static/images/crown.png" />
        <span>品质担保</span>
      </li>
      <li>
        <image src="/static/images/crown.png" />
        <span>售后无忧</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.slogan {
  padding: 20rpx 0;
  display: flex;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    image {
      padding: 6rpx;
      width: 16rpx;
      height: 16rpx;
      background-color: #f40;
      border-radius: 50%;
    }
    span {
      padding-left: 15rpx;
      font-size: 24rpx;
      color: #f40;
    }
  }
}
</style>