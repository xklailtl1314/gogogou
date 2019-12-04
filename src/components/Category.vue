<template>
  <div class="category">
    <div class="wrap">
      <navigator
        class="item"
        hover-class="none"
        v-for="(item,idx) in cate" :key="idx" :url="item.link">
        <img :src="item.url">
        <span>{{item.name}}</span>
      </navigator>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['cate']
}
</script>

<style lang="scss" scoped>
.category {
  margin-top: 40rpx;
  display: flex;
  .wrap {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    width: 100%;
    .item {
      padding: 0 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 0 0 20%;
      // height: 50px;
      box-sizing: border-box;
      img {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
      }
      span {
        padding: 10rpx 0;
        font-size: 24rpx;
      }
    }
  }
}
</style>