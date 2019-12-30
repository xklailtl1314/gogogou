<template>
  <div class="two-clo-goods">
    <navigator class="item" v-for="(item, idx) in twoColGoods" :key="idx" :url="showUrl">
      <!-- <img :src="item.img_src"> -->
      <img src="/static/tmp/mall12.jpg">
      <div class="wrap">
        <span class="title">{{item.title}}</span>
        <div class="line">
          <div class="price"><span>￥</span>{{item.price}}</div>
        </div>
        <div class="sub"><del>￥{{item.oldPrice}}</del></div>
      </div>
    </navigator>
  </div>
</template>

<script>
export default {
  data () {},
  props: ['twoColGoods', 'showUrl']
}
</script>

<style lang="scss">
   // 商品列表
  .two-clo-goods {
    padding: 0 30rpx;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    .item {
      margin-top: 20rpx;
      display: flex;
      flex-direction: column;
      width: 334rpx;
      border-radius: 10rpx;
      overflow: hidden;
      background-color: #fff;
      &:nth-of-type(2n) {
        margin-left: 22rpx;
      }
      img {
        width: 334rpx;
        height: 334rpx;
      }
      .wrap {
        padding: 0 24rpx 20rpx;
        .title {
          margin-top: 20rpx;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: 30rpx;
          line-height: 38rpx;
        }
        .line {
          margin-top: 20rpx;
          line-height: 1;
          .price {
            font-size: 28rpx;
            span {
              font-size: 18rpx;
            }
          }
        }
        .sub {
          margin-top: 20rpx;
          font-size: 18rpx;
          line-height: 1;
        }
      }
    }
  }
</style>