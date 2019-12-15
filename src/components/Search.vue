<template>
  <div class="search-wrap">
    <div class="wrap">
      <i class="iconfont icon-search1"></i>
      <input
        type="text"
        :placeholder="oPlaceholder"
        placeholder-style="color: #666"
        @change="clearSearch"
        v-model="oText">
      <i class="iconfont icon-quxiao" v-show="oText.length > 0"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['oText', 'oPlaceholder'],
  methods: {
    clearSearch () { // 清除输入框搜索
      this.oText = ''
    }
  }
}
</script>

<style lang="scss">
.search-wrap {
  padding: 20rpx 0 0;
  display: flex;
  background-color: #fff;
  .wrap {
    position: relative;
    margin: 0 30rpx;
    display: flex;
    align-items: center;
    width: 100%;
    height: 70rpx;
    border-radius: 35rpx;
    background-color: #eee;
    overflow: hidden;
    .icon-search1 {
      position: absolute;
      top: 50%;
      left: 36rpx;
      transform: translateY(-50%);
      font-size: 22rpx;
      color: #666;
    }
    input {
      padding: 0 70rpx;
      width: 100%;
      font-size: 26rpx;
    }
    .icon-quxiao {
      padding: 0 30rpx;
      font-size: 30rpx;
      color: #808084;
    }
  }
}
</style>