<template>
  <div class="category">
    <div class="wrap">
      <navigator
        class="item"
        hover-class="none"
        v-for="(item,idx) in cate" :key="idx" :url="item.link">
        <img :src="item.img_src">
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
  padding: 0 30rpx 22rpx;
  display: flex;
  background-color: #fff;
  .wrap {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    width: 100%;
    .item {
      padding: 45rpx 10rpx 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 0 0 20%;
      // height: 50px;
      box-sizing: border-box;
      img {
        width: 82rpx;
        height: 82rpx;
        border-radius: 50%;
      }
      span {
        padding: 20rpx 0 0;
        font-size: 26rpx;
        line-height: 1;
        color: #333;
      }
    }
  }
}
</style>