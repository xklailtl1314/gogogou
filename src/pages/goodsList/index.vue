<template>
  <!-- 商品列表 -->
  <div class="goods-list">
    <div class="goods-item" v-for="item in message" :key="item.id" @click="goDetail(item.id)">
      <div class="wrap">
        <img :src="item.img_url" />
      </div>
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <mp-button type="primary" btnClass="btn" @click="getMore">加载更多</mp-button>
  </div>
</template>

<script>
import util from '@/utils/index.js'
import api from '@/../config/api.js'
import mpButton from 'mpvue-weui/src/button'
export default {
  data () {
    return {
      pageindex: 1,
      message: []
    }
  },
  components: {
    mpButton
  },
  created () {
    this.getGoodsList()
  },
  methods: {
    // 获取列表数据
    getGoodsList () {
      // util.request(api.GoodsList + '?pageindex=' + this.pageindex).then(res => {
      //   if (res.status === 0) {
      //     this.message = this.message.concat(res.message)
      //   }
      // })
    },
    // 加载更多
    getMore () {
      this.pageindex++
      this.getGoodsList()
    },
    // 商品详情
    goDetail (id) {
      wx.navigateTo({
        url: '../goodsShow/main?id=' + id,
        success (res) {
          // success
        }
      })
    }
  }
}
</script>

<style lang="scss">
.goods-list {
  padding: 0 20rpx;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  .goods-item {
    margin-bottom: 20rpx;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    // width: 48%;
    width: calc(50vw - 32rpx);
    border: 1rpx solid #ccc;
    box-shadow: 0 0 8px #ccc;
    box-sizing: border-box;
    .wrap {
      position: relative;
      height: 0;
      width: 100%;
      padding: 100% 0 0;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .title {
      font-size: 14px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
  .btn {
    display: flex;
    width: 100%;
    text-align: center;
  }
}
</style>