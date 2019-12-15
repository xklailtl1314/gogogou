<template>
  <div class="today-discount">
    <div class="top">
      <span class="title">{{todayDiscount.name}}</span>
      <!-- 文字上下滚动 -->
      <div class="text-scroll">
        <div class="inner-container">
          <div v-for="(item, idx) in getNewName" :key="idx" class="wrap">
            <img :src="item.avator" class="avator">
            <span class="text">{{item.name}}</span>
          </div>
        </div>
      </div>
      <navigator class="more">
        <span>{{todayDiscount.more}}</span>
        <i class="iconfont icon-angle-right"></i>
      </navigator>
    </div>
    <div class="list">
      <navigator v-for="(item, idx) in todayDiscount.list" :key="idx" class="link">
        <img :src="item.img_src" >
        <p class="current"><span>￥</span>{{item.price}}</p>
        <p class="old">￥{{item.oldPrice}}</p>
      </navigator>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todayDiscount'],
  data () {
    return {
      arr: [
        {img_src: '/static/images/ad.jpg', name: '王小明'},
        {img_src: '/static/images/bag.png', name: '虎狮郎右兵卫'},
        {img_src: '/static/images/crown.png', name: '虎狮狼五右卫门'},
        {img_src: '/static/images/my.png', name: '九天应元雷声普化天尊'},
        {img_src: '/static/images/search.png', name: '刘涛'}
      ],
      goodsList: [
        { img_src: '/static/images/6.jpg', price: 100, oldPrice: 120 },
        { img_src: '/static/images/6.jpg', price: 100, oldPrice: 120 },
        { img_src: '/static/images/6.jpg', price: 100, oldPrice: 120 }
      ]
    }
  },
  computed: {
    getNewName () { // 拼团-文字上下滚动
      this.arr.forEach(item => {
        let start = item.name.charAt(0)
        let end = item.name.charAt(item.name.length - 1)
        item.img_src = item.img_src
        item.name = `${start}***${end}拼团成功`
      })
    }
  }
}
</script>

<style lang="scss">
.today-discount {
  margin-top: 46rpx;
  padding: 0 30rpx;
  .top {
    display: flex;
    align-items: center;
    .title {
      font-size: 30rpx;
      font-weight: bold;
    }
    .text-scroll {
      margin-left: 22rpx;
      width: 386rpx;
      height: 30rpx;
      overflow: hidden;
      .inner-container {
        animation: myMove 10s linear infinite;
        animation-fill-mode: forwards;
        .wrap {
          .avator {
            margin-right: 10rpx;
            width: 30rpx;
            height: 30rpx;
            border-radius: 50%;
            overflow: hidden;
          }
          .text {
            padding-left: 10rpx;
            font-size: 22rpx;
            color: #666;
            border-left: 1rpx solid #666;
          }
        }
      }
      @keyframes myMove {
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(-150px);
        }
      }
    }
    .more {
      margin-left: auto;
      display: flex;
      align-items: center;
      font-size: 26rpx;
      color: #999;
    }
  }
  .list {
    margin-top: 20rpx;
    padding: 20rpx 30rpx;
    display: flex;
    border-radius: 20rpx;
    background-color: #fff;
    .link {
      display: flex;
      flex-flow: row wrap;
      flex-direction: column;
      align-content: flex-start;
      width: 33.33%;
      img {
        width: 220rpx;
        height: 220rpx;
      }
      .current {
        margin-top: 20rpx;
        text-align: center;
        font-size: 26rpx;
        color: #b4145e;
        line-height: 1;
        span {
          font-size: 18rpx;
        }
      }
      .old {
        margin-top: 20rpx;
        font-size: 18rpx;
        line-height: 1;
        color: #999;
        text-align: center;
        text-decoration: line-through;
      }
    }
  }
}
</style>