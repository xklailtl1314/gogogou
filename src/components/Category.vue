<template>
  <div class="category">
    <div class="wrap">
      <div class="item" v-for="(item,idx) in cate" :key="idx">
        <img :src="item.url">
        <span>{{item.name}}</span>
      </div>
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