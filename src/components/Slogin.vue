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
  padding: 40rpx 0 0;
  display: flex;
  background-color: #fff;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    image {
      width: 25rpx;
      height: 25rpx;
      background-color: #b61c65;
      border-radius: 50%;
    }
    span {
      padding-left: 14rpx;
      font-size: 22rpx;
      color: #b61c65;
    }
  }
}
</style>